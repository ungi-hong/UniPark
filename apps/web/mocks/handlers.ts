import { http, HttpResponse } from "msw";
import {
  listPrefectures,
  listCitiesWithCount,
  listParkingLotsByCity,
  findNearby,
  getParkingLotById,
} from "@/lib/data/repository";

// MSW ハンドラ — テスト専用。
// 本番/開発では app/api/v1/**/route.ts (Next Route Handlers) が同じデータを返す。
// データソースは lib/data/repository に一本化されており、両者は同じ結果を返す。

const API = "/api/v1";

export const handlers = [
  http.get(`${API}/healthz`, () =>
    HttpResponse.json({ status: "ok", version: "mock" }),
  ),

  http.get(`${API}/regions/prefectures`, () =>
    HttpResponse.json(listPrefectures()),
  ),

  http.get(`${API}/regions/prefectures/:prefCode/cities`, ({ params }) => {
    const cities = listCitiesWithCount(params.prefCode as string);
    if (!cities) {
      return HttpResponse.json(
        { code: "not_found", message: "prefecture not found" },
        { status: 404 },
      );
    }
    return HttpResponse.json(cities);
  }),

  http.get(`${API}/regions/cities/:cityCode/parking-lots`, ({ params, request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") ?? 1);
    const perPage = Number(url.searchParams.get("perPage") ?? 20);
    return HttpResponse.json(
      listParkingLotsByCity(params.cityCode as string, { page, perPage }),
    );
  }),

  http.get(`${API}/parking-lots/nearby`, ({ request }) => {
    const url = new URL(request.url);
    const lng = Number(url.searchParams.get("lng"));
    const lat = Number(url.searchParams.get("lat"));
    const radius = Number(url.searchParams.get("radius") ?? 2000);
    const limit = Number(url.searchParams.get("limit") ?? 50);
    return HttpResponse.json(findNearby({ lng, lat, radius, limit }));
  }),

  http.get(`${API}/parking-lots/:id`, ({ params }) => {
    const found = getParkingLotById(params.id as string);
    if (!found) {
      return HttpResponse.json(
        { code: "not_found", message: "parking lot not found" },
        { status: 404 },
      );
    }
    return HttpResponse.json(found);
  }),
];
