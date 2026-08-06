import { describe, expect, it } from "vitest";
import {
  haversineMeters,
  listPrefectures,
  listCitiesWithCount,
  listParkingLotsByCity,
  findNearby,
  getParkingLotById,
} from "./repository";
import { parkingLots } from "./parking-lots";
import { prefectures } from "./regions";

describe("haversineMeters", () => {
  it("同一地点は 0m", () => {
    expect(haversineMeters(139.7671, 35.6812, 139.7671, 35.6812)).toBe(0);
  });

  it("東京駅→新宿駅は約 6km", () => {
    const d = haversineMeters(139.7671, 35.6812, 139.7006, 35.6896);
    expect(d).toBeGreaterThan(5500);
    expect(d).toBeLessThan(6500);
  });
});

describe("listPrefectures", () => {
  it("データのある都道府県をすべて返す", () => {
    const codes = listPrefectures().map((p) => p.code);
    const dataCodes = new Set(parkingLots.map((p) => p.prefectureCode));
    expect(new Set(codes)).toEqual(dataCodes);
  });
});

describe("listCitiesWithCount", () => {
  it("件数バッジが実データの件数と一致する", () => {
    for (const pref of prefectures) {
      for (const city of listCitiesWithCount(pref.code) ?? []) {
        const actual = parkingLots.filter((p) => p.cityCode === city.code).length;
        expect(city.parkingLotCount).toBe(actual);
      }
    }
  });

  it("全市区町村の件数合計 = 総件数", () => {
    const total = prefectures
      .flatMap((pref) => listCitiesWithCount(pref.code) ?? [])
      .reduce((sum, c) => sum + c.parkingLotCount, 0);
    expect(total).toBe(parkingLots.length);
  });

  it("存在しない都道府県は null", () => {
    expect(listCitiesWithCount("99")).toBeNull();
  });
});

describe("listParkingLotsByCity", () => {
  const cityCode = parkingLots[0].cityCode;
  const cityTotal = parkingLots.filter((p) => p.cityCode === cityCode).length;

  it("ページングが総数と整合する", () => {
    const page1 = listParkingLotsByCity(cityCode, { page: 1, perPage: 2 });
    expect(page1.total).toBe(cityTotal);
    expect(page1.items.length).toBe(Math.min(2, cityTotal));
    expect(page1.page).toBe(1);
    expect(page1.perPage).toBe(2);
  });

  it("範囲外ページは空", () => {
    const far = listParkingLotsByCity(cityCode, { page: 1000, perPage: 20 });
    expect(far.items).toEqual([]);
    expect(far.total).toBe(cityTotal);
  });

  it("Summary は Detail 専用フィールドを含まない", () => {
    const { items } = listParkingLotsByCity(cityCode, { page: 1, perPage: 1 });
    expect(items[0]).not.toHaveProperty("sourceUrl");
    expect(items[0]).not.toHaveProperty("discount");
    expect(items[0]).not.toHaveProperty("notes");
  });
});

describe("findNearby", () => {
  const origin = parkingLots[0];

  it("中心地点の駐車場が距離ほぼ 0 で先頭に来る", () => {
    const result = findNearby({
      lng: origin.longitude,
      lat: origin.latitude,
      radius: 2000,
    });
    expect(result[0].id).toBe(origin.id);
    expect(result[0].distanceM).toBeLessThan(1);
  });

  it("距離昇順で radius 以内のみ返す", () => {
    const radius = 3000;
    const result = findNearby({
      lng: origin.longitude,
      lat: origin.latitude,
      radius,
    });
    const distances = result.map((p) => p.distanceM as number);
    expect(distances).toEqual([...distances].sort((a, b) => a - b));
    for (const d of distances) expect(d).toBeLessThanOrEqual(radius);
  });

  it("limit で件数を絞れる", () => {
    const result = findNearby({
      lng: origin.longitude,
      lat: origin.latitude,
      radius: 100000,
      limit: 3,
    });
    expect(result.length).toBe(3);
  });
});

describe("getParkingLotById", () => {
  it("存在する id は詳細を返す", () => {
    expect(getParkingLotById(parkingLots[0].id)).toEqual(parkingLots[0]);
  });

  it("存在しない id は undefined", () => {
    expect(getParkingLotById("00000-999")).toBeUndefined();
  });
});
