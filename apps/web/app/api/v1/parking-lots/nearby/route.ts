import { findNearby } from "@/lib/data/repository";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lng = Number(url.searchParams.get("lng"));
  const lat = Number(url.searchParams.get("lat"));
  if (Number.isNaN(lng) || Number.isNaN(lat)) {
    return Response.json(
      { code: "bad_request", message: "lng and lat are required" },
      { status: 400 },
    );
  }
  const radius = Number(url.searchParams.get("radius") ?? 2000);
  const limit = Number(url.searchParams.get("limit") ?? 50);
  return Response.json(findNearby({ lng, lat, radius, limit }));
}
