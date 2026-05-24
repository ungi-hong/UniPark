import type { components } from "@unipark/api-types";

export type Prefecture = components["schemas"]["Prefecture"];
export type CityWithCount = components["schemas"]["CityWithCount"];
export type ParkingLotSummary = components["schemas"]["ParkingLotSummary"];
export type ParkingLotSummaryPage = components["schemas"]["ParkingLotSummaryPage"];
export type ParkingLotDetail = components["schemas"]["ParkingLotDetail"];
export type Discount = components["schemas"]["Discount"];
export type DiscountType = components["schemas"]["DiscountType"];
export type AccessibleSpace = components["schemas"]["AccessibleSpace"];

const API_BASE = "/api/v1";

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { Accept: "application/json", ...init?.headers },
  });
  if (!res.ok) {
    let code = "http_error";
    let message = `HTTP ${res.status}`;
    try {
      const body = (await res.json()) as { code?: string; message?: string };
      if (body.code) code = body.code;
      if (body.message) message = body.message;
    } catch {
      // ignore JSON parse error
    }
    throw new ApiError(res.status, code, message);
  }
  return (await res.json()) as T;
}

function buildQuery(params: Record<string, string | number | undefined>): string {
  const usp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined) continue;
    usp.set(k, String(v));
  }
  const s = usp.toString();
  return s ? `?${s}` : "";
}

export const api = {
  listPrefectures(): Promise<Prefecture[]> {
    return apiFetch("/regions/prefectures");
  },

  listCitiesByPrefecture(prefCode: string): Promise<CityWithCount[]> {
    return apiFetch(`/regions/prefectures/${encodeURIComponent(prefCode)}/cities`);
  },

  listParkingLotsByCity(
    cityCode: string,
    opts: { page?: number; perPage?: number } = {},
  ): Promise<ParkingLotSummaryPage> {
    return apiFetch(
      `/regions/cities/${encodeURIComponent(cityCode)}/parking-lots` +
        buildQuery({ page: opts.page, perPage: opts.perPage }),
    );
  },

  findNearbyParkingLots(opts: {
    lng: number;
    lat: number;
    radius?: number;
    limit?: number;
  }): Promise<ParkingLotSummary[]> {
    return apiFetch(`/parking-lots/nearby` + buildQuery(opts));
  },

  getParkingLotDetail(id: string): Promise<ParkingLotDetail> {
    return apiFetch(`/parking-lots/${encodeURIComponent(id)}`);
  },
};
