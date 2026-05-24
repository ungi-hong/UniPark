"use client";

import { useQuery } from "@tanstack/react-query";
import "maplibre-gl/dist/maplibre-gl.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Map, Marker, NavigationControl } from "react-map-gl/maplibre";
import { api, type ParkingLotSummary } from "@/lib/api-client";

const TOKYO_STATION = { lat: 35.6812, lng: 139.7671 };
const DEFAULT_RADIUS_M = 2000;

function useGeolocation() {
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null);
  const [denied, setDenied] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      queueMicrotask(() => setDenied(true));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => setPos({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => setDenied(true),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 },
    );
  }, []);

  return { pos, denied };
}

function NearbyMap({ mapTilerKey }: { mapTilerKey: string }) {
  const { pos, denied } = useGeolocation();
  const center = pos ?? TOKYO_STATION;
  const [selected, setSelected] = useState<ParkingLotSummary | null>(null);

  const { data, isFetching } = useQuery({
    queryKey: [
      "parking-lots",
      "nearby",
      center.lat,
      center.lng,
      DEFAULT_RADIUS_M,
    ],
    queryFn: () =>
      api.findNearbyParkingLots({
        lat: center.lat,
        lng: center.lng,
        radius: DEFAULT_RADIUS_M,
      }),
  });

  const statusLabel = denied
    ? "位置情報なし — 東京駅を表示"
    : pos
      ? `${data?.length ?? 0} 件 (半径 ${DEFAULT_RADIUS_M / 1000} km)`
      : "現在地取得中…";

  return (
    <div className="relative flex-1">
      <Map
        initialViewState={{
          longitude: center.lng,
          latitude: center.lat,
          zoom: 14,
        }}
        mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerKey}`}
        style={{ position: "absolute", inset: 0 }}
      >
        <NavigationControl position="top-right" />
        {pos && (
          <Marker longitude={pos.lng} latitude={pos.lat} color="#3b82f6" />
        )}
        {(data ?? []).map((p) => (
          <Marker
            key={p.id}
            longitude={p.longitude}
            latitude={p.latitude}
            color="#16a34a"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelected(p);
            }}
          />
        ))}
      </Map>

      <div className="pointer-events-none absolute inset-x-2 top-2 flex justify-between gap-2">
        <div className="rounded-full bg-white/90 px-3 py-1 text-xs text-zinc-700 shadow backdrop-blur">
          {statusLabel}
          {isFetching && " · 読込中"}
        </div>
        <Link
          href="/list"
          className="pointer-events-auto rounded-full bg-white/90 px-3 py-1 text-xs text-zinc-700 shadow backdrop-blur"
        >
          一覧で見る
        </Link>
      </div>

      {selected && (
        <SimpleInfoPanel
          parkingLot={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

function SimpleInfoPanel({
  parkingLot,
  onClose,
}: {
  parkingLot: ParkingLotSummary;
  onClose: () => void;
}) {
  return (
    <div className="absolute inset-x-4 bottom-4 space-y-2 rounded-2xl bg-white p-4 shadow-2xl">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base leading-snug font-semibold">
          {parkingLot.name}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="-mt-1 -mr-1 px-2 py-1 text-zinc-400"
        >
          ×
        </button>
      </div>
      <p className="text-xs text-zinc-500">{parkingLot.address}</p>
      <div className="flex items-center justify-between text-xs">
        <span className="text-zinc-700">
          車椅子区画 {parkingLot.accessibleSpaceTotal} 台
        </span>
        {typeof parkingLot.distanceM === "number" && (
          <span className="text-zinc-500">
            {Math.round(parkingLot.distanceM)} m
          </span>
        )}
      </div>
      <Link
        href={`/parking/${parkingLot.id}`}
        className="block w-full rounded-xl bg-zinc-900 py-2 text-center text-sm font-medium text-white"
      >
        詳細を見る
      </Link>
    </div>
  );
}

export default function Home() {
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  if (!mapTilerKey) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 py-16 text-center">
        <h1 className="text-xl font-semibold">UniPark</h1>
        <p className="max-w-sm text-sm text-zinc-600">
          マップ表示には MapTiler の API キーが必要です。
          <br />
          <code className="text-xs">apps/web/.env.local</code> に
          <br />
          <code className="text-xs">NEXT_PUBLIC_MAPTILER_KEY=…</code>
          <br />
          を設定して再起動してください。
        </p>
        <Link
          href="/list"
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white"
        >
          一覧から探す
        </Link>
      </div>
    );
  }
  return <NearbyMap mapTilerKey={mapTilerKey} />;
}
