import type { components } from "@unipark/api-types";
import { prefectures, citiesByPrefecture } from "./regions";
import { parkingLots } from "./parking-lots";

type Prefecture = components["schemas"]["Prefecture"];
type CityWithCount = components["schemas"]["CityWithCount"];
type ParkingLotSummary = components["schemas"]["ParkingLotSummary"];
type ParkingLotSummaryPage = components["schemas"]["ParkingLotSummaryPage"];
type ParkingLotDetail = components["schemas"]["ParkingLotDetail"];

// Detail 専用フィールドを落として Summary に変換
function toSummary(p: ParkingLotDetail): ParkingLotSummary {
  const {
    discount,
    accessibleSpaces,
    businessHours,
    phone,
    websiteUrl,
    notes,
    sourceUrl,
    updatedAt,
    ...summary
  } = p;
  return summary;
}

export function haversineMeters(
  aLng: number,
  aLat: number,
  bLng: number,
  bLat: number,
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const s1 = Math.sin(dLat / 2);
  const s2 = Math.sin(dLng / 2);
  const a =
    s1 * s1 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * s2 * s2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export function listPrefectures(): Prefecture[] {
  return prefectures;
}

// 該当都道府県が無ければ null
export function listCitiesWithCount(prefCode: string): CityWithCount[] | null {
  const list = citiesByPrefecture[prefCode];
  if (!list) return null;
  return list.map((c) => ({
    ...c,
    parkingLotCount: parkingLots.filter((p) => p.cityCode === c.code).length,
  }));
}

export function listParkingLotsByCity(
  cityCode: string,
  opts: { page?: number; perPage?: number } = {},
): ParkingLotSummaryPage {
  const page = Math.max(1, Number(opts.page ?? 1));
  const perPage = Math.min(100, Math.max(1, Number(opts.perPage ?? 20)));
  const filtered = parkingLots.filter((p) => p.cityCode === cityCode);
  const start = (page - 1) * perPage;
  const items = filtered.slice(start, start + perPage).map(toSummary);
  return { items, total: filtered.length, page, perPage };
}

export function findNearby(opts: {
  lng: number;
  lat: number;
  radius?: number;
  limit?: number;
}): ParkingLotSummary[] {
  const radius = Number(opts.radius ?? 2000);
  const limit = Math.min(100, Number(opts.limit ?? 50));
  return parkingLots
    .map((p) => ({
      ...toSummary(p),
      distanceM: haversineMeters(opts.lng, opts.lat, p.longitude, p.latitude),
    }))
    .filter((p) => (p.distanceM as number) <= radius)
    .sort((a, b) => (a.distanceM as number) - (b.distanceM as number))
    .slice(0, limit);
}

export function getParkingLotById(id: string): ParkingLotDetail | undefined {
  return parkingLots.find((p) => p.id === id);
}
