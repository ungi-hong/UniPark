"use client";

import { ChevronDown, CircleAlert, Filter, Info, MapPin, Navigation, Search, X } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Map, Marker, NavigationControl, type MapRef } from "react-map-gl/maplibre";
import { categoryLabels, getAccessibilityLabel, getCategoryLabel, hasAccessibilityInformation, type Facility } from "@/lib/data/facilities";

type InformationFilter = "all" | "discount" | "accessibility";
const TOKYO_CENTER = { latitude: 35.6812, longitude: 139.7671, zoom: 12.5 };
const collator = new Intl.Collator("ja");

function getStatus(facility: Facility) {
  switch (facility.discount_status) {
    case "available": return { label: "割引あり", className: "status-available" };
    case "none": return { label: "割引なし", className: "status-none" };
    case "not_applicable": return { label: "無料", className: "status-free" };
    case "historical": return { label: "過去の情報", className: "status-unverified" };
    default: return { label: "割引未確認", className: "status-unverified" };
  }
}

function Status({ facility }: { facility: Facility }) {
  const status = getStatus(facility);
  return <span className={`explorer-status ${status.className.replace("status-", "is-")}`}>{status.label}</span>;
}

function FacilityCard({ facility, selected, onSelect }: { facility: Facility; selected: boolean; onSelect: () => void }) {
  const features = facility.accessibility_features.filter((feature) => feature.status !== "unavailable").slice(0, 3);
  return (
    <li className="relative">
      <button type="button" className={`explorer-card ${selected ? "is-selected" : ""}`} onClick={onSelect} aria-pressed={selected}>
        <span className="explorer-card-top"><span className="explorer-card-type">{getCategoryLabel(facility.category)}</span><Status facility={facility} /></span>
        <h2>{facility.name}</h2>
        {facility.address ? <span className="explorer-card-address"><MapPin size={14} aria-hidden="true" />{facility.municipality} · {facility.address}</span> : null}
        <span className={`explorer-card-summary ${facility.discount ? "" : "is-muted"}`}>{facility.discount ?? "公式情報から障がい者割引を確認できていません"}</span>
        {features.length > 0 ? <span className="explorer-card-features">{features.map((feature, index) => <span key={`${feature.type}-${index}`}>{getAccessibilityLabel(feature.type)}</span>)}</span> : <span className="explorer-card-summary is-muted"><CircleAlert size={14} />バリアフリー情報 未確認</span>}
      </button>
      <Link href={`/facilities/${facility.id}`} className="explorer-card-detail absolute right-7 bottom-5">詳細を見る <span aria-hidden="true">→</span></Link>
    </li>
  );
}

export function FacilitiesExplorer({ facilities, mapTilerKey }: { facilities: Facility[]; mapTilerKey: string }) {
  const [query, setQuery] = useState("");
  const [municipality, setMunicipality] = useState("all");
  const [category, setCategory] = useState("all");
  const [information, setInformation] = useState<InformationFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(facilities[0]?.id ?? null);
  const [mobileListOpen, setMobileListOpen] = useState(false);
  const mapRef = useRef<MapRef>(null);

  const municipalities = useMemo(() => [...new Set(facilities.map((facility) => facility.municipality))].sort(collator.compare), [facilities]);
  const categories = useMemo(() => [...new Set(facilities.map((facility) => facility.category))].sort((a, b) => collator.compare(getCategoryLabel(a), getCategoryLabel(b))), [facilities]);
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ja");
    return facilities.filter((facility) => {
      if (municipality !== "all" && facility.municipality !== municipality) return false;
      if (category !== "all" && facility.category !== category) return false;
      if (information === "discount" && facility.discount_status !== "available") return false;
      if (information === "accessibility" && !hasAccessibilityInformation(facility)) return false;
      if (!normalizedQuery) return true;
      return [facility.name, facility.address, facility.municipality, facility.discount, facility.accessibility_notes, ...facility.accessibility_features.flatMap((feature) => [getAccessibilityLabel(feature.type), feature.details])].filter(Boolean).join(" ").toLocaleLowerCase("ja").includes(normalizedQuery);
    });
  }, [category, facilities, information, municipality, query]);

  const selectFacility = (facility: Facility) => {
    setSelectedId(facility.id);
    if (facility.longitude != null && facility.latitude != null) mapRef.current?.flyTo({ center: [facility.longitude, facility.latitude], zoom: 15, duration: 450 });
  };
  const selected = facilities.find((facility) => facility.id === selectedId) ?? null;

  return (
    <main className="explorer-page">
      <aside className={`explorer-sidebar ${mobileListOpen ? "is-list-open" : ""}`}>
        <div className="explorer-heading"><div><p className="explorer-eyebrow">TOKYO · FACILITIES</p><h1>施設を探す</h1><p className="explorer-heading-copy">お出かけ先のバリアフリー情報と障がい者割引を検索できます。</p></div><button type="button" className="explorer-mobile-filter" onClick={() => setMobileListOpen((open) => !open)} aria-expanded={mobileListOpen}><Filter size={16} />絞り込み</button></div>
        <div className={`explorer-filters ${mobileListOpen ? "is-mobile-open" : ""}`}>
          <label className="explorer-search"><span className="sr-only">施設を検索</span><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="施設名・住所・キーワード" />{query ? <button type="button" onClick={() => setQuery("")} aria-label="検索をクリア"><X size={15} /></button> : null}</label>
          <div className="explorer-select-grid">
            <label className="explorer-select">市区町村<select value={municipality} onChange={(event) => setMunicipality(event.target.value)}><option value="all">すべて</option>{municipalities.map((name) => <option key={name}>{name}</option>)}</select><ChevronDown size={15} /></label>
            <label className="explorer-select">施設種別<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">すべて</option>{categories.map((value) => <option key={value} value={value}>{categoryLabels[value] ?? value}</option>)}</select><ChevronDown size={15} /></label>
          </div>
          <span className="explorer-filter-label"><Filter size={14} />情報で絞り込む</span><div className="explorer-segmented"><button type="button" className={information === "all" ? "is-active" : ""} onClick={() => setInformation("all")}>すべて</button><button type="button" className={information === "discount" ? "is-active" : ""} onClick={() => setInformation("discount")}>割引あり</button><button type="button" className={information === "accessibility" ? "is-active" : ""} onClick={() => setInformation("accessibility")}>設備あり</button></div>
        </div>
        <div className="explorer-results-header"><span><strong>{filtered.length}</strong> 件の施設</span><span>公式情報を確認済み</span></div>
        <div className="explorer-results"><ul className="explorer-list">{filtered.length > 0 ? filtered.map((facility) => <FacilityCard key={facility.id} facility={facility} selected={selectedId === facility.id} onSelect={() => selectFacility(facility)} />) : <li className="explorer-empty"><Search size={24} /><strong>施設が見つかりません</strong><p>条件を変えて、もう一度検索してください。</p></li>}</ul></div>
        <p className="explorer-footnote"><Info size={14} />掲載情報は施設・自治体の公式情報をもとに確認しています。</p>
      </aside>

      <section className="explorer-map" aria-label="施設マップ">
        <Map ref={mapRef} initialViewState={TOKYO_CENTER} mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerKey}`} style={{ position: "absolute", inset: 0 }}><NavigationControl position="top-right" />{filtered.map((facility) => facility.longitude != null && facility.latitude != null ? <Marker key={facility.id} longitude={facility.longitude} latitude={facility.latitude} anchor="bottom"><button type="button" onClick={(event) => { event.stopPropagation(); selectFacility(facility); }} className={`explorer-marker ${facility.discount_status === "available" ? "is-primary" : ""} ${selectedId === facility.id ? "is-selected" : ""}`} aria-label={`${facility.name}を選択`}><MapPin size={18} fill="currentColor" /></button></Marker> : null)}</Map>
        <button type="button" className="explorer-location-button" aria-label="現在地を表示" onClick={() => navigator.geolocation?.getCurrentPosition((position) => mapRef.current?.flyTo({ center: [position.coords.longitude, position.coords.latitude], zoom: 15 }))}><Navigation size={17} /></button>
        <div className="explorer-map-legend"><span><i className="is-primary" />割引あり</span><span><i />その他</span></div>
        {selected ? <div className="explorer-map-card"><button className="explorer-map-card-close" type="button" onClick={() => setSelectedId(null)} aria-label="閉じる"><X size={16} /></button><small>{selected.municipality} · {getCategoryLabel(selected.category)}</small><h3>{selected.name}</h3><p>{selected.discount ?? "割引情報は未確認です"}</p><Link href={`/facilities/${selected.id}`}>詳細を見る →</Link></div> : null}
      </section>
      <div className="explorer-mobile-sheet"><span>{filtered.length}件の施設</span><button type="button" onClick={() => setMobileListOpen((open) => !open)}>{mobileListOpen ? "地図を見る" : "一覧を見る"}</button></div>
    </main>
  );
}
