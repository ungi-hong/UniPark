import type { Metadata } from "next";
import { facilities } from "@/lib/data/facilities";
import { FacilitiesExplorer } from "./facilities-explorer";

export const metadata: Metadata = {
  title: "障がい者割引・バリアフリー施設",
  description:
    "障がい者割引や車いす対応、補助犬、字幕、音声ガイドなどの情報から施設を探せます。",
};

export default function FacilitiesPage() {
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  if (!mapTilerKey) {
    return <main className="flex flex-1 items-center justify-center px-4 py-16"><p className="text-sm text-zinc-600">地図を表示するための設定が不足しています。</p></main>;
  }
  return <FacilitiesExplorer facilities={facilities} mapTilerKey={mapTilerKey} />;
}
