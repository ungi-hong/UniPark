import { getParkingLotById } from "@/lib/data/repository";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const found = getParkingLotById(id);
  if (!found) {
    return Response.json(
      { code: "not_found", message: "parking lot not found" },
      { status: 404 },
    );
  }
  return Response.json(found);
}
