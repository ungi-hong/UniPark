import { describe, expect, it } from "vitest";
import { parkingLots } from "@/lib/data/parking-lots";
import { GET as getPrefectures } from "./regions/prefectures/route";
import { GET as getCities } from "./regions/prefectures/[prefCode]/cities/route";
import { GET as getNearby } from "./parking-lots/nearby/route";
import { GET as getDetail } from "./parking-lots/[id]/route";

// Route Handlers は素の Request/Response なので Next ランタイム無しで直接呼べる。

const BASE = "http://localhost/api/v1";

describe("GET /regions/prefectures", () => {
  it("都道府県一覧を返す", async () => {
    const res = await getPrefectures();
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body[0]).toHaveProperty("code");
    expect(body[0]).toHaveProperty("name");
  });
});

describe("GET /regions/prefectures/:prefCode/cities", () => {
  it("存在する都道府県は市区町村一覧", async () => {
    const res = await getCities(new Request(`${BASE}/regions/prefectures/13/cities`), {
      params: Promise.resolve({ prefCode: "13" }),
    });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty("parkingLotCount");
  });

  it("存在しない都道府県は 404", async () => {
    const res = await getCities(new Request(`${BASE}/regions/prefectures/99/cities`), {
      params: Promise.resolve({ prefCode: "99" }),
    });
    expect(res.status).toBe(404);
  });
});

describe("GET /parking-lots/nearby", () => {
  it("lng/lat 無しは 400", async () => {
    const res = await getNearby(new Request(`${BASE}/parking-lots/nearby`));
    expect(res.status).toBe(400);
  });

  it("駐車場の真上を指定するとその駐車場が返る", async () => {
    const p = parkingLots[0];
    const res = await getNearby(
      new Request(
        `${BASE}/parking-lots/nearby?lng=${p.longitude}&lat=${p.latitude}&radius=500`,
      ),
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body[0].id).toBe(p.id);
  });
});

describe("GET /parking-lots/:id", () => {
  it("存在する id は詳細を返す", async () => {
    const p = parkingLots[0];
    const res = await getDetail(new Request(`${BASE}/parking-lots/${p.id}`), {
      params: Promise.resolve({ id: p.id }),
    });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(p.id);
    expect(body.sourceUrl).toBeTruthy();
  });

  it("存在しない id は 404", async () => {
    const res = await getDetail(new Request(`${BASE}/parking-lots/00000-999`), {
      params: Promise.resolve({ id: "00000-999" }),
    });
    expect(res.status).toBe(404);
  });
});
