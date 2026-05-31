import { listPrefectures } from "@/lib/data/repository";

export async function GET() {
  return Response.json(listPrefectures());
}
