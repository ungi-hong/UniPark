import facilityData from "@/data/facility-research.json";

export type AccessibilityFeature = {
  type: string;
  status: "available" | "conditional" | "unavailable";
  details: string;
};

export type Facility = {
  id: string;
  municipality_code: string;
  municipality: string;
  name: string;
  category: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  regular_price: string | null;
  discount: string | null;
  discount_scope: "free" | "partial" | "conditional" | null;
  discounted_services: string[];
  residency_requirement: string | null;
  eligible_handbooks: string[];
  eligible_documents: string[];
  grade_conditions: string | null;
  companion_policy: string | null;
  requirements: string | null;
  valid_from: string | null;
  valid_until: string | null;
  operational_status: string;
  status_note: string | null;
  notes: string | null;
  source_url: string;
  additional_source_urls: string[];
  verified_at: string;
  discount_status:
    | "available"
    | "historical"
    | "none"
    | "not_applicable"
    | "unverified";
  accessibility_review_status: "verified" | "partial" | "unverified";
  accessibility_features: AccessibilityFeature[];
  accessibility_notes: string | null;
  accessibility_source_urls: string[];
  phone: string | null;
  opening_hours: string | null;
  closed_days: string | null;
  reservation: string | null;
  status_checked_at: string;
};

export const facilities = facilityData as Facility[];

export const categoryLabels: Record<string, string> = {
  aquarium: "水族館",
  cinema: "映画館",
  community: "地域・公共施設",
  gallery: "美術館・ギャラリー",
  garden: "庭園",
  leisure: "レジャー",
  museum: "博物館・資料館",
  other: "その他",
  planetarium: "プラネタリウム",
  pool: "プール",
  sports: "スポーツ施設",
  theater: "劇場・ホール",
};

export const accessibilityLabels: Record<string, string> = {
  accessible_parking: "障がい者用駐車場",
  accessible_toilet: "車いす対応トイレ",
  audio_guide: "音声ガイド",
  captions: "字幕・字幕端末",
  elevator: "エレベーター",
  hearing_assistance: "聴覚支援",
  ostomate_toilet: "オストメイト対応",
  sensory_accommodation: "感覚特性への配慮",
  service_animals: "補助犬同伴",
  tactile_guide: "点字・触知案内",
  visual_support: "視覚支援",
  wheelchair_access: "車いす利用",
  wheelchair_assistance: "車いす利用支援",
  wheelchair_entrance: "車いす対応入口",
  wheelchair_rental: "車いす貸出",
  wheelchair_route: "段差の少ない経路",
  wheelchair_space: "車いす席・スペース",
  wheelchair_stretcher_support: "車いす・ストレッチャー対応",
  writing_support: "筆談対応",
};

export function getCategoryLabel(category: string): string {
  return categoryLabels[category] ?? category;
}

export function getAccessibilityLabel(type: string): string {
  return accessibilityLabels[type] ?? type;
}

export function hasAccessibilityInformation(facility: Facility): boolean {
  return (
    facility.accessibility_review_status !== "unverified" ||
    facility.accessibility_features.length > 0 ||
    Boolean(facility.accessibility_notes)
  );
}

export function getFacility(id: string): Facility | undefined {
  return facilities.find((facility) => facility.id === id);
}
