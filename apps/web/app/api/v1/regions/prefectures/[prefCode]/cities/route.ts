import { listCitiesWithCount } from "@/lib/data/repository";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ prefCode: string }> },
) {
  const { prefCode } = await params;
  const cities = listCitiesWithCount(prefCode);
  if (!cities) {
    return Response.json(
      { code: "not_found", message: "prefecture not found" },
      { status: 404 },
    );
  }
  return Response.json(cities);
}
