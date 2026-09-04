import type { Metadata } from "next";
import {
  Accessibility,
  ArrowLeft,
  Check,
  CircleAlert,
  ExternalLink,
  Info,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocationMap } from "@/app/location-map";
import {
  facilities,
  getAccessibilityLabel,
  getCategoryLabel,
  getFacility,
} from "@/lib/data/facilities";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return facilities.map((facility) => ({ id: facility.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const facility = getFacility(id);
  if (!facility) return { title: "施設が見つかりません" };
  return {
    title: `${facility.name}の障がい者向け情報`,
    description:
      facility.discount ??
      facility.accessibility_notes ??
      `${facility.name}の障がい者向け設備・支援情報`,
  };
}

function SectionTitle({
  number,
  eyebrow,
  children,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="detail-section-title">
      <span className="detail-section-number">{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="detail-info-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

const equipmentState = {
  available: { label: "利用できます", symbol: <Check size={14} /> },
  conditional: { label: "条件・事前確認あり", symbol: "!" },
  unavailable: { label: "利用できません", symbol: "−" },
} as const;

export default async function FacilityDetailPage({ params }: Props) {
  const { id } = await params;
  const facility = getFacility(id);
  if (!facility) notFound();

  const sourceUrls = [
    ...new Set(
      [
        facility.source_url,
        ...facility.additional_source_urls,
        ...facility.accessibility_source_urls,
      ].filter(Boolean),
    ),
  ];
  const hasAccessibility = facility.accessibility_features.length > 0;
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  return (
    <main className="detail-main">
      <div className="detail-container">
        <Link href="/facilities" className="detail-back">
          <ArrowLeft size={15} aria-hidden="true" />施設一覧に戻る
        </Link>

        <div className="detail-grid">
          <article>
            <header className="detail-hero">
              <div className="detail-kicker">
                <span>{facility.municipality}</span>
                <span>{getCategoryLabel(facility.category)}</span>
              </div>
              <h1>{facility.name}</h1>
              {facility.address && (
                <p className="detail-address">
                  <MapPin aria-hidden="true" />{facility.address}
                </p>
              )}
              <div className="detail-badges">
                {facility.discount_status === "available" && (
                  <span className="detail-badge is-green">割引あり</span>
                )}
                {facility.discount_status === "not_applicable" && (
                  <span className="detail-badge is-blue">入場・利用無料</span>
                )}
                {facility.discount_status === "unverified" && (
                  <span className="detail-badge is-muted">割引未確認</span>
                )}
                {hasAccessibility && (
                  <span className="detail-badge is-blue">
                    <Accessibility size={13} aria-hidden="true" />
                    バリアフリー情報あり
                  </span>
                )}
              </div>
            </header>

            <section className="detail-section">
              <SectionTitle number="01" eyebrow="PRICING & DISCOUNT">
                割引・料金
              </SectionTitle>
              <div className="detail-price-box">
                <div className="detail-price-regular">
                  <span>通常料金</span>
                  <strong>{facility.regular_price ?? "公式情報をご確認ください"}</strong>
                </div>
                <div className="detail-price-discount">
                  <strong>
                    {facility.discount ??
                      "公式情報から障がい者割引を確認できていません"}
                  </strong>
                  {facility.requirements && <p>{facility.requirements}</p>}
                </div>
              </div>
              <dl className="detail-info-list">
                <DetailRow
                  label="対象となる手帳"
                  value={[
                    ...facility.eligible_handbooks,
                    ...facility.eligible_documents,
                  ].join("、") || null}
                />
                <DetailRow label="等級などの条件" value={facility.grade_conditions} />
                <DetailRow label="居住地の条件" value={facility.residency_requirement} />
                <DetailRow label="介助者・同伴者" value={facility.companion_policy} />
                <DetailRow
                  label="対象サービス"
                  value={facility.discounted_services.join("、") || null}
                />
              </dl>
            </section>

            <section className="detail-section">
              <SectionTitle number="02" eyebrow="ACCESSIBILITY">
                バリアフリー設備・支援
              </SectionTitle>
              {hasAccessibility ? (
                <ul className="detail-equipment-list">
                  {facility.accessibility_features.map((feature, index) => {
                    const state = equipmentState[feature.status];
                    return (
                      <li
                        key={`${feature.type}-${index}`}
                        className="detail-equipment-row"
                      >
                        <span
                          className={`detail-equipment-icon ${
                            feature.status === "available"
                              ? ""
                              : `is-${feature.status}`
                          }`}
                          aria-hidden="true"
                        >
                          {state.symbol}
                        </span>
                        <div>
                          <strong>{getAccessibilityLabel(feature.type)}</strong>
                          <span
                            className={`detail-equipment-state ${
                              feature.status === "available"
                                ? ""
                                : `is-${feature.status}`
                            }`}
                          >
                            {state.label}
                          </span>
                          <p>{feature.details}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="detail-notice">
                  <div className="detail-notice-title">
                    <CircleAlert size={17} aria-hidden="true" />
                    設備・支援情報は未確認です
                  </div>
                  <p>利用前に施設へお問い合わせください。</p>
                </div>
              )}
              {facility.accessibility_notes && (
                <p className="detail-source-note">
                  {facility.accessibility_notes}
                </p>
              )}
            </section>

            {(facility.phone || facility.reservation || facility.notes) && (
              <section className="detail-section">
                <SectionTitle number="03" eyebrow="BEFORE YOUR VISIT">
                  利用前の確認
                </SectionTitle>
                <div className="detail-notice">
                  <div className="detail-notice-title">
                    <Phone size={17} aria-hidden="true" />事前に確認したいこと
                  </div>
                  <p>
                    {facility.reservation ??
                      "割引条件や設備の利用について、来館前に施設へご確認ください。"}
                  </p>
                  {facility.phone && (
                    <a href={`tel:${facility.phone}`}>{facility.phone}</a>
                  )}
                </div>
                {facility.notes && (
                  <dl className="detail-info-list">
                    <DetailRow label="備考" value={facility.notes} />
                  </dl>
                )}
              </section>
            )}

            <section className="detail-section">
              <SectionTitle number="04" eyebrow="OFFICIAL SOURCES">
                公式情報源
              </SectionTitle>
              <ul className="detail-source-list">
                {sourceUrls.map((url, index) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      公式情報源 {index + 1}
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="detail-source-note">
                最終確認日：{facility.verified_at}
                <br />
                料金や利用条件は変更される場合があります。お出かけ前に公式情報をご確認ください。
              </p>
            </section>
          </article>

          <aside className="detail-aside">
            <div className="detail-aside-map">
              {mapTilerKey && facility.latitude != null && facility.longitude != null ? (
                <LocationMap
                  latitude={facility.latitude}
                  longitude={facility.longitude}
                  mapTilerKey={mapTilerKey}
                />
              ) : (
                <div className="detail-aside-fallback">周辺地図</div>
              )}
            </div>
            <div className="detail-aside-block">
              <strong>掲載情報について</strong>
              <p>
                自治体・施設が公開している公式情報をもとに掲載しています。
              </p>
            </div>
            <div className="detail-aside-block">
              <strong><Info size={14} aria-hidden="true" /> ご利用前に</strong>
              <p>最新の条件は公式サイトまたは施設へご確認ください。</p>
              {sourceUrls[0] && (
                <a href={sourceUrls[0]} target="_blank" rel="noopener noreferrer">
                  公式サイトを確認
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
