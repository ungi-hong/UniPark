import { listParkingLotsByCity } from "@/lib/data/repository";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ cityCode: string }> },
) {
  const { cityCode } = await params;
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") ?? 1);
  const perPage = Number(url.searchParams.get("perPage") ?? 20);
  return Response.json(listParkingLotsByCity(cityCode, { page, perPage }));
}
