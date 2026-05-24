import { http, HttpResponse } from "msw";
import type { components } from "@unipark/api-types";
import { prefectures, citiesByPrefecture } from "./data/regions";
import { parkingLots } from "./data/parking-lots";

type ParkingLotSummary = components["schemas"]["ParkingLotSummary"];
type ParkingLotDetail = components["schemas"]["ParkingLotDetail"];

const API = "/api/v1";

function toSummary(p: ParkingLotDetail): ParkingLotSummary {
  // discount 等の Detail 専用フィールドを落とす
  const { discount, accessibleSpaces, businessHours, phone, websiteUrl, notes, sourceUrl, updatedAt, ...summary } = p;
  return summary;
}

function haversineMeters(aLng: number, aLat: number, bLng: number, bLat: number): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const s1 = Math.sin(dLat / 2);
  const s2 = Math.sin(dLng / 2);
  const a = s1 * s1 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * s2 * s2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export const handlers = [
  http.get(`${API}/healthz`, () =>
    HttpResponse.json({ status: "ok", version: "mock" }),
  ),

  http.get(`${API}/regions/prefectures`, () => HttpResponse.json(prefectures)),

  http.get(`${API}/regions/prefectures/:prefCode/cities`, ({ params }) => {
    const list = citiesByPrefecture[params.prefCode as string];
    if (!list) {
      return HttpResponse.json({ code: "not_found", message: "prefecture not found" }, { status: 404 });
    }
    // 件数バッジは parkingLots を見て集計
    const withCount = list.map((c) => ({
      ...c,
      parkingLotCount: parkingLots.filter((p) => p.cityCode === c.code).length,
    }));
    return HttpResponse.json(withCount);
  }),

  http.get(`${API}/regions/cities/:cityCode/parking-lots`, ({ params, request }) => {
    const url = new URL(request.url);
    const page = Math.max(1, Number(url.searchParams.get("page") ?? 1));
    const perPage = Math.min(100, Math.max(1, Number(url.searchParams.get("perPage") ?? 20)));
    const filtered = parkingLots.filter((p) => p.cityCode === params.cityCode);
    const start = (page - 1) * perPage;
    const items = filtered.slice(start, start + perPage).map(toSummary);
    return HttpResponse.json({ items, total: filtered.length, page, perPage });
  }),

  http.get(`${API}/parking-lots/nearby`, ({ request }) => {
    const url = new URL(request.url);
    const lng = Number(url.searchParams.get("lng"));
    const lat = Number(url.searchParams.get("lat"));
    const radius = Number(url.searchParams.get("radius") ?? 2000);
    const limit = Math.min(100, Number(url.searchParams.get("limit") ?? 50));
    const result = parkingLots
      .map((p) => ({
        ...toSummary(p),
        distanceM: haversineMeters(lng, lat, p.longitude, p.latitude),
      }))
      .filter((p) => (p.distanceM as number) <= radius)
      .sort((a, b) => (a.distanceM as number) - (b.distanceM as number))
      .slice(0, limit);
    return HttpResponse.json(result);
  }),

  http.get(`${API}/parking-lots/:id`, ({ params }) => {
    const found = parkingLots.find((p) => p.id === params.id);
    if (!found) {
      return HttpResponse.json({ code: "not_found", message: "parking lot not found" }, { status: 404 });
    }
    return HttpResponse.json(found);
  }),
];
