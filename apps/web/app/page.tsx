"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  ChevronDown,
  Filter,
  Info,
  LocateFixed,
  MapPin,
  Search,
  X,
} from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
const RADIUS_MIN_M = 100;
const RADIUS_MAX_M = 10000;
const DEFAULT_RADIUS_M = 2000;

type ParkingFilter = "all" | "discount" | "accessible";

function haversineMeters(
  aLng: number,
  aLat: number,
  bLng: number,
  bLat: number,
): number {
  const radius = 6371000;
  const toRad = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const s1 = Math.sin(dLat / 2);
  const s2 = Math.sin(dLng / 2);
  const value =
    s1 * s1 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * s2 * s2;
  return 2 * radius * Math.asin(Math.sqrt(value));
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function useGeolocation() {
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [denied, setDenied] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!navigator.geolocation) {
      queueMicrotask(() => setDenied(true));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (result) =>
        setPosition({
          lat: result.coords.latitude,
          lng: result.coords.longitude,
        }),
      () => setDenied(true),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 },
    );
  }, []);

  return { position, denied };
}

function getDiscountLabel(parkingLot: ParkingLotSummary): string {
  switch (parkingLot.discountType) {
    case "free":
      return "無料・免除あり";
    case "percentage":
      return "料金割引あり";
    case "fixed":
      return "定額割引あり";
    case "cap_hours":
      return "時間無料あり";
    case "amount_cap":
      return "上限額あり";
    default:
      return "割引内容は要確認";
  }
}

function ParkingCard({
  parkingLot,
  selected,
  onSelect,
}: {
  parkingLot: ParkingLotSummary;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        className={`explorer-card ${selected ? "is-selected" : ""}`}
        onClick={onSelect}
        aria-pressed={selected}
      >
        <div className="explorer-card-top">
          <span className="explorer-card-type">
            {parkingLot.cityName} · 駐車場
          </span>
          <span
            className={`explorer-status ${
              parkingLot.discountType === "unknown"
                ? "is-unverified"
                : parkingLot.discountType === "free"
                  ? "is-free"
                  : "is-available"
            }`}
          >
            {parkingLot.discountType === "unknown" ? "要確認" : "割引あり"}
          </span>
        </div>
        <h2>{parkingLot.name}</h2>
        <p className="explorer-card-address">
          <MapPin aria-hidden="true" />
          {parkingLot.address}
        </p>
        <p className="explorer-card-summary">
          {getDiscountLabel(parkingLot)}
          {parkingLot.accessibleSpaceTotal > 0 &&
            ` · 車いす区画 ${parkingLot.accessibleSpaceTotal}台`}
        </p>
        <span className="explorer-card-detail">
          地図で見る <ArrowRight size={14} aria-hidden="true" />
        </span>
      </button>
    </li>
  );
}

function ParkingExplorer({ mapTilerKey }: { mapTilerKey: string }) {
  const { position, denied } = useGeolocation();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("all");
  const [filter, setFilter] = useState<ParkingFilter>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
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

  useEffect(() => {
    if (autoCentered.current || !position) return;
    autoCentered.current = true;
    queueMicrotask(() =>
      setViewState((current) => ({
        ...current,
        longitude: position.lng,
        latitude: position.lat,
        zoom: DEFAULT_ZOOM,
      })),
    );
  }, [position]);

  const syncSearchFromMap = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const bounds = map.getBounds();
    const center = bounds.getCenter();
    const northEast = bounds.getNorthEast();
    const diagonalHalf = haversineMeters(
      center.lng,
      center.lat,
      northEast.lng,
      northEast.lat,
    );
    const radius = clamp(
      Math.round(diagonalHalf),
      RADIUS_MIN_M,
      RADIUS_MAX_M,
    );
    setSearchParams((previous) => {
      if (
        Math.abs(previous.lat - center.lat) < 1e-5 &&
        Math.abs(previous.lng - center.lng) < 1e-5 &&
        Math.abs(previous.radius - radius) < 50
      ) {
        return previous;
      }
      return { lat: center.lat, lng: center.lng, radius };
    });
  }, []);

  const { data = [], isFetching } = useQuery({
    queryKey: [
      "parking-lots",
      "nearby",
      searchParams.lat,
      searchParams.lng,
      searchParams.radius,
    ],
    queryFn: () => api.findNearbyParkingLots(searchParams),
  });

  const cities = useMemo(
    () => [...new Set(data.map((parkingLot) => parkingLot.cityName))].sort(),
    [data],
  );
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ja");
    return data.filter((parkingLot) => {
      if (city !== "all" && parkingLot.cityName !== city) return false;
      if (filter === "discount" && parkingLot.discountType === "unknown") {
        return false;
      }
      if (
        filter === "accessible" &&
        parkingLot.accessibleSpaceTotal === 0
      ) {
        return false;
      }
      if (!normalizedQuery) return true;
      return [parkingLot.name, parkingLot.address, parkingLot.cityName]
        .join(" ")
        .toLocaleLowerCase("ja")
        .includes(normalizedQuery);
    });
  }, [city, data, filter, query]);

  const selected = filtered.find(
    (parkingLot) => parkingLot.id === selectedId,
  );
  const selectParkingLot = (parkingLot: ParkingLotSummary) => {
    setSelectedId(parkingLot.id);
    mapRef.current?.flyTo({
      center: [parkingLot.longitude, parkingLot.latitude],
      zoom: 16,
      duration: 500,
    });
  };
  const recenterToMe = () => {
    if (!position) return;
    setViewState((current) => ({
      ...current,
      longitude: position.lng,
      latitude: position.lat,
      zoom: DEFAULT_ZOOM,
    }));
  };

  return (
    <main className="explorer-page">
      <section
        className={`explorer-sidebar ${listOpen ? "is-list-open" : ""}`}
        aria-label="駐車場検索"
      >
        <div className="explorer-heading">
          <div>
            <p className="explorer-eyebrow">PARKING MAP</p>
            <h1>駐車場を探す</h1>
            <p className="explorer-heading-copy">障がい者向け駐車料金割引</p>
          </div>
          <Link href="/facilities" className="explorer-switch-link">
            施設を探す
          </Link>
          <button
            type="button"
            className="explorer-mobile-filter"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
          >
            <Filter size={15} aria-hidden="true" />絞り込み
          </button>
        </div>

        <div
          className={`explorer-filters ${
            filtersOpen ? "is-mobile-open" : ""
          }`}
        >
          <label className="explorer-search">
            <span className="sr-only">駐車場名・住所から検索</span>
            <Search aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="駐車場名・住所から検索"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="検索語を消去"
              >
                <X size={15} aria-hidden="true" />
              </button>
            )}
          </label>

          <div className="explorer-select-grid">
            <label className="explorer-select">
              市区町村
              <select
                value={city}
                onChange={(event) => setCity(event.target.value)}
              >
                <option value="all">すべて</option>
                {cities.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
              <ChevronDown aria-hidden="true" />
            </label>
            <label className="explorer-select">
              表示範囲
              <select value="map" disabled>
                <option value="map">現在の地図範囲</option>
              </select>
              <ChevronDown aria-hidden="true" />
            </label>
          </div>

          <p className="explorer-filter-label">
            <Filter size={14} aria-hidden="true" />情報で絞り込む
          </p>
          <div className="explorer-segmented">
            <button
              type="button"
              className={filter === "all" ? "is-active" : ""}
              onClick={() => setFilter("all")}
            >
              すべて
            </button>
            <button
              type="button"
              className={filter === "discount" ? "is-active" : ""}
              onClick={() => setFilter("discount")}
            >
              割引あり
            </button>
            <button
              type="button"
              className={filter === "accessible" ? "is-active" : ""}
              onClick={() => setFilter("accessible")}
            >
              車いす区画
            </button>
          </div>
        </div>

        <div className="explorer-results-header">
          <span><strong>{filtered.length}</strong> 件の駐車場</span>
          <Link href="/list">地域一覧から探す</Link>
        </div>
        <div className="explorer-results">
          {filtered.length > 0 ? (
            <ul className="explorer-list">
              {filtered.map((parkingLot) => (
                <ParkingCard
                  key={parkingLot.id}
                  parkingLot={parkingLot}
                  selected={parkingLot.id === selectedId}
                  onSelect={() => selectParkingLot(parkingLot)}
                />
              ))}
            </ul>
          ) : (
            <div className="explorer-empty">
              <Search size={24} aria-hidden="true" />
              <strong>駐車場が見つかりません</strong>
              <p>地図を移動するか、条件を変えてください。</p>
            </div>
          )}
        </div>
        <p className="explorer-footnote">
          <Info aria-hidden="true" />
          掲載情報は自治体・施設の公式サイト等をもとに確認しています。
        </p>
      </section>

      <section className="explorer-map" aria-label="駐車場マップ">
        <Map
          ref={mapRef}
          {...viewState}
          onMove={(event: ViewStateChangeEvent) =>
            setViewState((current) => ({ ...current, ...event.viewState }))
          }
          onMoveEnd={syncSearchFromMap}
          onLoad={syncSearchFromMap}
          mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerKey}`}
          style={{ position: "absolute", inset: 0 }}
        >
          <NavigationControl position="top-right" />
          {position && (
            <Marker longitude={position.lng} latitude={position.lat} color="#3b82f6" />
          )}
          {filtered.map((parkingLot) => (
            <Marker
              key={parkingLot.id}
              longitude={parkingLot.longitude}
              latitude={parkingLot.latitude}
              anchor="bottom"
              onClick={(event) => {
                event.originalEvent.stopPropagation();
                selectParkingLot(parkingLot);
              }}
            >
              <span
                className={`explorer-marker ${
                  parkingLot.discountType !== "unknown" ? "is-primary" : ""
                } ${parkingLot.id === selectedId ? "is-selected" : ""}`}
              >
                <MapPin aria-hidden="true" />
              </span>
            </Marker>
          ))}
        </Map>

        <div className="explorer-map-status" aria-live="polite">
          {!position && !denied
            ? "現在地を取得中"
            : `${filtered.length}件 · 半径${(
                searchParams.radius / 1000
              ).toFixed(1)}km`}
          {isFetching && " · 読み込み中"}
        </div>

        <div className="explorer-map-legend">
          <span><i className="is-primary" />割引あり</span>
          <span><i />要確認</span>
        </div>

        {selected && (
          <div className="explorer-map-card">
            <button
              type="button"
              className="explorer-map-card-close"
              onClick={() => setSelectedId(null)}
              aria-label="選択を解除"
            >
              <X size={16} aria-hidden="true" />
            </button>
            <small>{selected.cityName} · 駐車場</small>
            <h3>{selected.name}</h3>
            <p>
              {getDiscountLabel(selected)}
              {selected.accessibleSpaceTotal > 0 &&
                ` · 車いす区画 ${selected.accessibleSpaceTotal}台`}
            </p>
            <Link href={`/parking/${selected.id}`}>
              詳細を見る <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        )}

        <button
          type="button"
          className="explorer-location-button"
          onClick={recenterToMe}
          disabled={!position}
          aria-label="現在地に戻す"
        >
          <LocateFixed size={19} aria-hidden="true" />
        </button>
      </section>

      <div className="explorer-mobile-sheet">
        <span>{filtered.length}件の駐車場</span>
        <button type="button" onClick={() => setListOpen((open) => !open)}>
          {listOpen ? "一覧を閉じる" : "一覧を見る"}
        </button>
      </div>
    </main>
  );
}

export default function Home() {
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  if (!mapTilerKey) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-white px-8 py-16 text-center">
        <h1 className="text-xl font-semibold">駐車場を探す</h1>
        <p className="max-w-sm text-sm text-zinc-600">
          地図を表示するための設定が不足しています。
        </p>
        <Link href="/list" className="border border-zinc-300 px-4 py-2 text-sm font-semibold text-blue-700">
          地域一覧から探す
        </Link>
      </main>
    );
  }
  return <ParkingExplorer mapTilerKey={mapTilerKey} />;
}
