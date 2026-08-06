import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { parkingLots } from "@/lib/data/parking-lots";

// MSW ハンドラ (テスト用モック) が Route Handlers と同じ契約を守っているかの確認。
// どちらも lib/data/repository を参照するので、URL・ステータス・形が主な検証対象。

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());

const BASE = "http://localhost/api/v1";

describe("MSW handlers", () => {
  it("healthz", async () => {
    const res = await fetch(`${BASE}/healthz`);
    expect(res.status).toBe(200);
    expect((await res.json()).status).toBe("ok");
  });

  it("prefectures → cities → parking-lots → detail が一気通貫で辿れる", async () => {
    const prefs = await (await fetch(`${BASE}/regions/prefectures`)).json();
    expect(prefs.length).toBeGreaterThan(0);

    const cities = await (
      await fetch(`${BASE}/regions/prefectures/${prefs[0].code}/cities`)
    ).json();
    expect(cities.length).toBeGreaterThan(0);

    const page = await (
      await fetch(`${BASE}/regions/cities/${cities[0].code}/parking-lots`)
    ).json();
    expect(page.total).toBeGreaterThan(0);

    const detail = await (
      await fetch(`${BASE}/parking-lots/${page.items[0].id}`)
    ).json();
    expect(detail.id).toBe(page.items[0].id);
    expect(detail.sourceUrl).toBeTruthy();
  });

  it("nearby は距離順", async () => {
    const p = parkingLots[0];
    const res = await fetch(
      `${BASE}/parking-lots/nearby?lng=${p.longitude}&lat=${p.latitude}&radius=2000`,
    );
    const body = await res.json();
    expect(body[0].id).toBe(p.id);
  });
});
