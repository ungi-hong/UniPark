import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const webRoot = process.cwd();
const envPath = path.join(webRoot, ".env.local");
const dataPath = path.join(webRoot, "data/facility-research.json");

const envText = await readFile(envPath, "utf8");
const mapTilerKey = envText
  .split(/\r?\n/)
  .map((line) => line.trim())
  .find((line) => line.startsWith("NEXT_PUBLIC_MAPTILER_KEY="))
  ?.slice("NEXT_PUBLIC_MAPTILER_KEY=".length)
  .replace(/^['"]|['"]$/g, "");

if (!mapTilerKey) {
  throw new Error("NEXT_PUBLIC_MAPTILER_KEY is not configured in .env.local");
}

const facilities = JSON.parse(await readFile(dataPath, "utf8"));
let updated = 0;
let missed = 0;

for (const facility of facilities) {
  if (
    typeof facility.latitude === "number" &&
    typeof facility.longitude === "number"
  ) {
    continue;
  }

  const query = encodeURIComponent(facility.address || facility.name);
  const url = new URL(`https://api.maptiler.com/geocoding/${query}.json`);
  url.searchParams.set("key", mapTilerKey);
  url.searchParams.set("language", "ja");
  url.searchParams.set("country", "jp");
  url.searchParams.set("limit", "1");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Geocoding failed for ${facility.id}: ${response.status}`);
  }

  const result = await response.json();
  const coordinates = result.features?.[0]?.center;
  if (!Array.isArray(coordinates) || coordinates.length < 2) {
    missed += 1;
    continue;
  }

  facility.longitude = coordinates[0];
  facility.latitude = coordinates[1];
  updated += 1;
}

await writeFile(dataPath, `${JSON.stringify(facilities, null, 2)}\n`);
process.stdout.write(`Updated ${updated} facilities; ${missed} unresolved.\n`);
