"use client";

import { useQuery } from "@tanstack/react-query";
import "maplibre-gl/dist/maplibre-gl.css";
import Link from "next/link";
import { use } from "react";
import { Map, Marker, NavigationControl } from "react-map-gl/maplibre";
import { ApiError, api, type Discount } from "@/lib/api-client";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function formatDiscount(d: Discount): string {
  switch (d.type) {
    case "free":
      return "完全無料";
    case "percentage":
      return d.value != null ? `${d.value}% 割引` : "割引あり";
    case "fixed":
      return d.value != null ? `${d.value}円 割引` : "定額割引";
    case "cap_hours":
      return d.maxHours != null ? `${d.maxHours}時間まで無料` : "時間無料あり";
    case "amount_cap":
      return d.value != null ? `上限 ${d.value}円` : "上限額あり";
    default:
      return "要確認";
  }
}

export default function ParkingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  const { data, isLoading, error } = useQuery({
    queryKey: ["parking-lot", id],
    queryFn: () => api.getParkingLotDetail(id),
    retry: (count, err) => !(err instanceof ApiError) || err.status >= 500,
  });

  if (isLoading) {
    return (
      <div className="flex-1 px-4 py-6">
        <p className="text-sm text-zinc-500">読み込み中…</p>
      </div>
    );
  }

  if (error) {
    const notFound = error instanceof ApiError && error.status === 404;
    return (
      <div className="flex-1 space-y-4 px-4 py-6">
        <Link href="/" className="text-xs text-zinc-500">
          ← マップに戻る
        </Link>
        <h1 className="text-xl font-semibold">
          {notFound ? "駐車場が見つかりません" : "読み込みに失敗しました"}
        </h1>
        <p className="text-sm text-zinc-600">
          {notFound
            ? "URL が間違っているか、データが削除された可能性があります。"
            : "時間を置いて再度お試しください。"}
        </p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex-1 space-y-6 px-4 py-6">
      <header className="space-y-1">
        <Link href="/" className="text-xs text-zinc-500">
          ← マップに戻る
        </Link>
        <h1 className="text-xl leading-snug font-semibold">{data.name}</h1>
        <p className="text-sm text-zinc-500">{data.address}</p>
      </header>

      <section className="relative h-56 overflow-hidden rounded-2xl border border-zinc-200">
        {mapTilerKey ? (
          <Map
            initialViewState={{
              longitude: data.longitude,
              latitude: data.latitude,
              zoom: 16,
            }}
            mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerKey}`}
            style={{ position: "absolute", inset: 0 }}
          >
            <NavigationControl position="top-right" />
            <Marker
              longitude={data.longitude}
              latitude={data.latitude}
              color="#16a34a"
            />
          </Map>
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-zinc-400">
            周辺地図 (MapTiler キー未設定)
          </div>
        )}
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-zinc-500">割引情報</h2>
        <div className="space-y-1 rounded-2xl border border-zinc-200 p-4">
          <p className="text-lg font-semibold">
            {formatDiscount(data.discount)}
          </p>
          {data.discount.target && (
            <p className="text-sm text-zinc-700">
              対象: {data.discount.target}
            </p>
          )}
          {data.discount.conditions && (
            <p className="text-xs text-zinc-500">{data.discount.conditions}</p>
          )}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-zinc-500">
          障がい者用駐車区画
        </h2>
        {data.accessibleSpaces.length === 0 ? (
          <p className="text-sm text-zinc-500">登録情報なし</p>
        ) : (
          <ul className="space-y-2">
            {data.accessibleSpaces.map((sp, i) => (
              <li
                key={i}
                className="space-y-1 rounded-2xl border border-zinc-200 p-4"
              >
                <p className="text-sm font-medium">
                  {sp.count} 区画
                  {sp.widthCm != null && ` ・ 幅 ${sp.widthCm} cm`}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {sp.hasRoof && (
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700">
                      屋根あり
                    </span>
                  )}
                  {sp.nearEntrance && (
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700">
                      入口付近
                    </span>
                  )}
                  {sp.hasRamp && (
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700">
                      スロープあり
                    </span>
                  )}
                </div>
                {sp.notes && (
                  <p className="text-xs text-zinc-500">{sp.notes}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {(data.businessHours ||
        data.phone ||
        data.websiteUrl ||
        data.notes) && (
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-zinc-500">その他</h2>
          <dl className="space-y-2 rounded-2xl border border-zinc-200 p-4 text-sm">
            {data.businessHours && (
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-zinc-500">営業時間</dt>
                <dd className="flex-1 whitespace-pre-wrap">
                  {data.businessHours}
                </dd>
              </div>
            )}
            {data.phone && (
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-zinc-500">電話</dt>
                <dd className="flex-1">
                  <a
                    href={`tel:${data.phone}`}
                    className="text-blue-600 underline"
                  >
                    {data.phone}
                  </a>
                </dd>
              </div>
            )}
            {data.websiteUrl && (
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-zinc-500">Web</dt>
                <dd className="flex-1 break-all">
                  <a
                    href={data.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {data.websiteUrl}
                  </a>
                </dd>
              </div>
            )}
            {data.notes && (
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-zinc-500">備考</dt>
                <dd className="flex-1 whitespace-pre-wrap">{data.notes}</dd>
              </div>
            )}
          </dl>
        </section>
      )}

      <footer className="space-y-1 text-xs text-zinc-500">
        <p>最終更新: {formatDate(data.updatedAt)}</p>
        {data.sourceUrl && (
          <p className="break-all">
            情報源:{" "}
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {data.sourceUrl}
            </a>
          </p>
        )}
      </footer>
    </div>
  );
}
