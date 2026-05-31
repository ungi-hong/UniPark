"use client";

import { useQuery } from "@tanstack/react-query";
import { LocateFixed } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Map,
  Marker,
  NavigationControl,
  type MapRef,
  type ViewStateChangeEvent,
} from "react-map-gl/maplibre";
import { api, type ParkingLotSummary } from "@/lib/api-client";

const TOKYO_STATION = { lat: 35.6812, lng: 139.7671 };
const DEFAULT_ZOOM = 14;
// OpenAPI 仕様: /parking-lots/nearby の radius は 100〜10000m
const RADIUS_MIN_M = 100;
const RADIUS_MAX_M = 10000;
const DEFAULT_RADIUS_M = 2000;

function haversineMeters(
  aLng: number,
  aLat: number,
  bLng: number,
  bLat: number,
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const s1 = Math.sin(dLat / 2);
  const s2 = Math.sin(dLng / 2);
  const a =
    s1 * s1 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * s2 * s2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

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
  const [selected, setSelected] = useState<ParkingLotSummary | null>(null);
  const [viewState, setViewState] = useState({
    longitude: TOKYO_STATION.lng,
    latitude: TOKYO_STATION.lat,
    zoom: DEFAULT_ZOOM,
  });
  const [searchParams, setSearchParams] = useState({
    lat: TOKYO_STATION.lat,
    lng: TOKYO_STATION.lng,
    radius: DEFAULT_RADIUS_M,
  });
  const mapRef = useRef<MapRef>(null);
  const autoCentered = useRef(false);

  // 位置情報が初めて取れた時だけ自動で現在地中心にパン (以降のユーザー操作は尊重)
  useEffect(() => {
    if (autoCentered.current) return;
    if (!pos) return;
    autoCentered.current = true;
    queueMicrotask(() =>
      setViewState((v) => ({
        ...v,
        longitude: pos.lng,
        latitude: pos.lat,
        zoom: DEFAULT_ZOOM,
      })),
    );
  }, [pos]);

  // 現在のマップ bounds から検索 center と radius (画面対角線の半分) を確定する
  const syncSearchFromMap = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const bounds = map.getBounds();
    const center = bounds.getCenter();
    const ne = bounds.getNorthEast();
    const diagonalHalfM = haversineMeters(
      center.lng,
      center.lat,
      ne.lng,
      ne.lat,
    );
    const radius = clamp(
      Math.round(diagonalHalfM),
      RADIUS_MIN_M,
      RADIUS_MAX_M,
    );
    setSearchParams((prev) => {
      // 微小な揺らぎでの再 fetch を避ける
      if (
        Math.abs(prev.lat - center.lat) < 1e-5 &&
        Math.abs(prev.lng - center.lng) < 1e-5 &&
        Math.abs(prev.radius - radius) < 50
      ) {
        return prev;
      }
      return { lat: center.lat, lng: center.lng, radius };
    });
  }, []);

  const { data, isFetching } = useQuery({
    queryKey: [
      "parking-lots",
      "nearby",
      searchParams.lat,
      searchParams.lng,
      searchParams.radius,
    ],
    queryFn: () => api.findNearbyParkingLots(searchParams),
  });

  const radiusKm = (searchParams.radius / 1000).toFixed(1);
  const count = data?.length ?? 0;
  const statusLabel =
    !pos && !denied
      ? "現在地取得中…"
      : `${count} 件 (半径 ${radiusKm} km)`;

  const recenterToMe = () => {
    if (!pos) return;
    setViewState((v) => ({
      ...v,
      longitude: pos.lng,
      latitude: pos.lat,
      zoom: DEFAULT_ZOOM,
    }));
  };

  return (
    <div className="relative flex-1 [&_.maplibregl-ctrl-top-right]:mt-12">
      <Map
        ref={mapRef}
        {...viewState}
        onMove={(e: ViewStateChangeEvent) =>
          setViewState((v) => ({ ...v, ...e.viewState }))
        }
        onMoveEnd={syncSearchFromMap}
        onLoad={syncSearchFromMap}
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

      {!selected && (
        <button
          type="button"
          onClick={recenterToMe}
          disabled={!pos}
          aria-label="現在地に戻す"
          className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-700 shadow-lg transition disabled:opacity-40"
        >
          <LocateFixed className="h-5 w-5" />
        </button>
      )}

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
