import { findNearby } from "@/lib/data/repository";

export async function GET(request: Request) {
  const url = new URL(request.url);
  // searchParams.get は未指定で null を返し Number(null) は 0 になるため、欠落は明示的に弾く
  const lngRaw = url.searchParams.get("lng");
  const latRaw = url.searchParams.get("lat");
  const lng = Number(lngRaw);
  const lat = Number(latRaw);
  if (!lngRaw || !latRaw || Number.isNaN(lng) || Number.isNaN(lat)) {
    return Response.json(
      { code: "bad_request", message: "lng and lat are required" },
      { status: 400 },
    );
  }
  const radius = Number(url.searchParams.get("radius") ?? 2000);
  const limit = Number(url.searchParams.get("limit") ?? 50);
  return Response.json(findNearby({ lng, lat, radius, limit }));
}
