// discount-research.json を API データ ParkingLotDetail[] (lib/data/parking-lots.ts) に変換する生成スクリプト。
// 出力は Next Route Handlers (app/api/v1) と MSW (テスト用) の双方が lib/data/repository 経由で参照する。
//
// - 緯度経度は国土地理院ジオコーディング API (https://msearch.gsi.go.jp/address-search/AddressSearch)
//   で住所から取得。解決できない住所は市区町村名でフォールバック。
// - discount_scope / discount_rate を API スキーマの DiscountType にマッピング。
// - normal_rate / capacity は detail 画面の notes に集約。
//
// 実行: node apps/web/scripts/build-parking-mock.mjs
// 出力: apps/web/lib/data/parking-lots.ts

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "../data/discount-research.json");
const OUT = resolve(__dirname, "../lib/data/parking-lots.ts");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function geocode(query) {
  const url =
    "https://msearch.gsi.go.jp/address-search/AddressSearch?q=" +
    encodeURIComponent(query);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error("status " + res.status);
      const arr = await res.json();
      if (Array.isArray(arr) && arr[0]?.geometry?.coordinates) {
        const [lng, lat] = arr[0].geometry.coordinates;
        if (typeof lng === "number" && typeof lat === "number") return { lng, lat };
      }
      return null;
    } catch {
      await sleep(400);
    }
  }
  return null;
}

// 住所の括弧書き・「先」「地先」等を落として geocoder が当たりやすい形にする
function cleanAddress(addr) {
  return addr
    .replace(/[（(].*?[)）]/g, "")
    .replace(/先$/, "")
    .replace(/地先.*$/, "")
    .replace(/\s+/g, "")
    .trim();
}

function parseHours(s) {
  const hm = s.match(/(\d+)\s*時間(?:\s*(\d+)\s*分)?/);
  if (hm) return Number(hm[1]) + (hm[2] ? Number(hm[2]) / 60 : 0);
  const m = s.match(/(\d+)\s*分/);
  if (m) return Number(m[1]) / 60;
  return null;
}

// discount_scope / discount_rate → { discountType, discount(type/value/maxHours) }
function mapDiscount(scope, rate) {
  if (scope === "full") return { type: "free" };
  const r = rate ?? "";
  if (/半額/.test(r)) return { type: "percentage", value: 50 };
  const wari = r.match(/(\d+)\s*割/);
  if (wari) return { type: "percentage", value: Number(wari[1]) * 10 };
  if (/円割引|円引き/.test(r)) {
    const yen = r.match(/(\d[\d,]*)\s*円/);
    return { type: "fixed", value: yen ? Number(yen[1].replace(/,/g, "")) : null };
  }
  if (/無料|減免|免除/.test(r)) {
    const h = parseHours(r);
    return { type: "cap_hours", maxHours: h };
  }
  return { type: "unknown" };
}

function buildNotes(rec) {
  const parts = [];
  if (rec.normal_rate) parts.push(`通常料金: ${rec.normal_rate}`);
  if (rec.discount_rate) parts.push(`障害者割引: ${rec.discount_rate}`);
  if (rec.capacity != null) parts.push(`総台数: ${rec.capacity}台`);
  return parts.length ? parts.join("\n") : null;
}

const PREF_NAME = "東京都";

async function main() {
  const records = JSON.parse(await readFile(SRC, "utf8"));
  const cityCentroidCache = new Map();
  const out = [];
  let geoHit = 0;
  let cityFallback = 0;

  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    let coords = await geocode(cleanAddress(rec.address));
    if (coords) {
      geoHit++;
    } else {
      const key = rec.municipality;
      if (!cityCentroidCache.has(key)) {
        cityCentroidCache.set(key, await geocode(PREF_NAME + rec.municipality));
        await sleep(120);
      }
      coords = cityCentroidCache.get(key) ?? { lng: 139.6917, lat: 35.6895 };
      cityFallback++;
    }

    const d = mapDiscount(rec.discount_scope, rec.discount_rate);
    const accessible = rec.capacity_accessible ?? 0;

    out.push({
      id: rec.id,
      name: rec.name,
      address: rec.address,
      latitude: Number(coords.lat.toFixed(6)),
      longitude: Number(coords.lng.toFixed(6)),
      prefectureCode: "13",
      prefectureName: PREF_NAME,
      cityCode: rec.municipality_code,
      cityName: rec.municipality,
      accessibleSpaceTotal: accessible,
      discountType: d.type,
      discount: {
        type: d.type,
        ...(d.value != null ? { value: d.value } : {}),
        ...(d.maxHours != null ? { maxHours: Number(d.maxHours.toFixed(2)) } : {}),
        conditions: rec.discount_conditions ?? undefined,
      },
      accessibleSpaces: accessible > 0 ? [{ count: accessible }] : [],
      notes: buildNotes(rec),
      sourceUrl: rec.source_url ?? null,
      updatedAt: `${rec.verified_at}T00:00:00Z`,
    });

    await sleep(120);
    if ((i + 1) % 25 === 0) console.error(`  geocoded ${i + 1}/${records.length}`);
  }

  const header = `import type { components } from "@unipark/api-types";

type ParkingLotDetail = components["schemas"]["ParkingLotDetail"];

// 自動生成ファイル — 手で編集しないこと。
// 生成元: apps/web/data/discount-research.json
// 生成スクリプト: apps/web/scripts/build-parking-mock.mjs
// 緯度経度は国土地理院ジオコーディング API による住所→座標変換 (一部は市区町村名でフォールバック)。
// 件数: ${out.length} (geocode 成功 ${geoHit} / 市区町村フォールバック ${cityFallback})

export const parkingLots: ParkingLotDetail[] = `;

  await writeFile(OUT, header + JSON.stringify(out, null, 2) + ";\n", "utf8");
  console.error(`done: ${out.length} lots → ${OUT}`);
  console.error(`geocode hit ${geoHit}, city fallback ${cityFallback}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
