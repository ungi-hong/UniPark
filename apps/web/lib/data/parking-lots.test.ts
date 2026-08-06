import { describe, expect, it } from "vitest";
import { parkingLots } from "./parking-lots";
import { citiesByPrefecture, prefectures } from "./regions";

// 調査ルーチンが追記するデータと生成スクリプトの品質ガード。
// ここが落ちたら discount-research.json の新規エントリか生成スクリプトに問題がある。

const DISCOUNT_TYPES = new Set([
  "free",
  "percentage",
  "fixed",
  "cap_hours",
  "amount_cap",
  "unknown",
]);

describe("parking-lots データ整合性", () => {
  it("1 件以上ある", () => {
    expect(parkingLots.length).toBeGreaterThan(0);
  });

  it("id が一意", () => {
    const ids = parkingLots.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("id の接頭辞 = cityCode、prefectureCode = cityCode の上2桁", () => {
    for (const p of parkingLots) {
      expect(p.id.startsWith(`${p.cityCode}-`), p.id).toBe(true);
      expect(p.prefectureCode).toBe(p.cityCode.slice(0, 2));
    }
  });

  it("座標が日本の範囲内", () => {
    for (const p of parkingLots) {
      expect(p.latitude, p.id).toBeGreaterThan(20);
      expect(p.latitude, p.id).toBeLessThan(46);
      expect(p.longitude, p.id).toBeGreaterThan(122);
      expect(p.longitude, p.id).toBeLessThan(154);
    }
  });

  it("情報源 URL と更新日を必ず持つ", () => {
    for (const p of parkingLots) {
      expect(p.sourceUrl, p.id).toMatch(/^https?:\/\//);
      expect(Number.isNaN(Date.parse(p.updatedAt ?? "")), p.id).toBe(false);
    }
  });

  it("discountType が契約の enum に含まれる", () => {
    for (const p of parkingLots) {
      expect(DISCOUNT_TYPES.has(p.discountType), `${p.id}: ${p.discountType}`).toBe(
        true,
      );
      expect(p.discount.type).toBe(p.discountType);
    }
  });

  it("全駐車場の cityCode が regions に存在する", () => {
    const cityCodes = new Set(
      Object.values(citiesByPrefecture).flat().map((c) => c.code),
    );
    for (const p of parkingLots) {
      expect(cityCodes.has(p.cityCode), `${p.id}: ${p.cityCode}`).toBe(true);
    }
  });

  it("regions の都道府県とデータの都道府県が一致する", () => {
    const prefCodes = new Set(prefectures.map((p) => p.code));
    const dataPrefCodes = new Set(parkingLots.map((p) => p.prefectureCode));
    expect(prefCodes).toEqual(dataPrefCodes);
  });
});
