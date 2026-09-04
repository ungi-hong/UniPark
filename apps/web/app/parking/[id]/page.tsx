import type { Metadata } from "next";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Info,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocationMap } from "@/app/location-map";
import type { Discount, ParkingLotDetail } from "@/lib/api-client";
import { parkingLots } from "@/lib/data/parking-lots";
import { getParkingLotById } from "@/lib/data/repository";

type Props = { params: Promise<{ id: string }> };

export const revalidate = 86400;

export function generateStaticParams() {
  return parkingLots.map((parkingLot) => ({ id: parkingLot.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const parkingLot = getParkingLotById(id);
  if (!parkingLot) return { title: "駐車場が見つかりません" };
  return {
    title: `${parkingLot.name}の障がい者割引`,
    description: `${parkingLot.name}（${parkingLot.address}）の障がい者向け駐車料金割引と車いす対応区画の情報です。`,
  };
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatDiscount(discount: Discount): string {
  switch (discount.type) {
    case "free":
      return "駐車料金の無料・免除あり";
    case "percentage":
      return discount.value != null
        ? `駐車料金 ${discount.value}%割引`
        : "駐車料金の割引あり";
    case "fixed":
      return discount.value != null
        ? `駐車料金 ${discount.value}円割引`
        : "定額割引あり";
    case "cap_hours":
      return discount.maxHours != null
        ? `${discount.maxHours}時間まで無料`
        : "時間無料あり";
    case "amount_cap":
      return discount.value != null
        ? `割引後の上限 ${discount.value}円`
        : "割引上限額あり";
    default:
      return "割引内容は公式情報で要確認";
  }
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

function AccessibleSpaces({ parkingLot }: { parkingLot: ParkingLotDetail }) {
  if (parkingLot.accessibleSpaces.length === 0) {
    return (
      <div className="detail-notice">
        <div className="detail-notice-title">
          <Info size={17} aria-hidden="true" />区画情報は未確認です
        </div>
        <p>障がい者用駐車区画の有無は、利用前に施設へご確認ください。</p>
      </div>
    );
  }

  return (
    <ul className="detail-equipment-list">
      {parkingLot.accessibleSpaces.map((space, index) => {
        const details = [
          space.widthCm != null ? `幅 ${space.widthCm}cm` : null,
          space.hasRoof ? "屋根あり" : null,
          space.nearEntrance ? "入口付近" : null,
          space.hasRamp ? "スロープあり" : null,
        ].filter(Boolean);
        return (
          <li key={index} className="detail-equipment-row">
            <span className="detail-equipment-icon" aria-hidden="true">
              <Check size={14} />
            </span>
            <div>
              <strong>障がい者用駐車区画 {space.count}台</strong>
              <span className="detail-equipment-state">登録あり</span>
              <p>
                {details.join(" · ") || space.notes || "詳細条件は未確認です"}
              </p>
              {details.length > 0 && space.notes && <p>{space.notes}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default async function ParkingDetailPage({ params }: Props) {
  const { id } = await params;
  const parkingLot = getParkingLotById(id);
  if (!parkingLot) notFound();
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  return (
    <main className="detail-main">
      <div className="detail-container">
        <Link href="/" className="detail-back">
          <ArrowLeft size={15} aria-hidden="true" />マップに戻る
        </Link>

        <div className="detail-grid">
          <article>
            <header className="detail-hero">
              <div className="detail-kicker">
                <span>{parkingLot.prefectureName}{parkingLot.cityName}</span>
                <span>駐車場</span>
              </div>
              <h1>{parkingLot.name}</h1>
              <p className="detail-address">
                <MapPin aria-hidden="true" />{parkingLot.address}
              </p>
              <div className="detail-badges">
                <span
                  className={`detail-badge ${
                    parkingLot.discount.type === "unknown"
                      ? "is-muted"
                      : "is-green"
                  }`}
                >
                  {parkingLot.discount.type === "unknown"
                    ? "割引内容は要確認"
                    : "障がい者割引あり"}
                </span>
                {parkingLot.accessibleSpaceTotal > 0 && (
                  <span className="detail-badge is-blue">
                    車いす区画 {parkingLot.accessibleSpaceTotal}台
                  </span>
                )}
              </div>
            </header>

            <section className="detail-section">
              <SectionTitle number="01" eyebrow="PARKING DISCOUNT">
                駐車料金の割引
              </SectionTitle>
              <div className="detail-price-box">
                <div className="detail-price-regular">
                  <span>割引内容</span>
                  <strong>{formatDiscount(parkingLot.discount)}</strong>
                </div>
                <div className="detail-price-discount">
                  <strong>
                    {parkingLot.discount.conditions ??
                      "具体的な利用条件は公式情報をご確認ください。"}
                  </strong>
                </div>
              </div>
              <dl className="detail-info-list">
                <DetailRow label="対象となる方" value={parkingLot.discount.target} />
                <DetailRow label="営業時間" value={parkingLot.businessHours} />
                <DetailRow label="備考" value={parkingLot.notes} />
              </dl>
            </section>

            <section className="detail-section">
              <SectionTitle number="02" eyebrow="ACCESSIBLE PARKING">
                障がい者用駐車区画
              </SectionTitle>
              <AccessibleSpaces parkingLot={parkingLot} />
            </section>

            {(parkingLot.phone || parkingLot.websiteUrl) && (
              <section className="detail-section">
                <SectionTitle number="03" eyebrow="BEFORE YOUR VISIT">
                  利用前の確認
                </SectionTitle>
                <div className="detail-notice">
                  <div className="detail-notice-title">
                    <Phone size={17} aria-hidden="true" />事前に確認したいこと
                  </div>
                  <p>
                    割引を受ける手順や必要書類は、利用前に管理者へご確認ください。
                  </p>
                  {parkingLot.phone && (
                    <a href={`tel:${parkingLot.phone}`}>{parkingLot.phone}</a>
                  )}
                </div>
              </section>
            )}

            <section className="detail-section">
              <SectionTitle number="04" eyebrow="OFFICIAL SOURCES">
                公式情報源
              </SectionTitle>
              <ul className="detail-source-list">
                {parkingLot.sourceUrl && (
                  <li>
                    <a
                      href={parkingLot.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      割引情報の公式ページ
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </li>
                )}
                {parkingLot.websiteUrl && parkingLot.websiteUrl !== parkingLot.sourceUrl && (
                  <li>
                    <a
                      href={parkingLot.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      駐車場のWebサイト
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
              <p className="detail-source-note">
                最終確認日：{formatDate(parkingLot.updatedAt)}
                <br />
                料金や利用条件は変更される場合があります。利用前に公式情報をご確認ください。
              </p>
            </section>
          </article>

          <aside className="detail-aside">
            <div className="detail-aside-map">
              {mapTilerKey ? (
                <LocationMap
                  latitude={parkingLot.latitude}
                  longitude={parkingLot.longitude}
                  mapTilerKey={mapTilerKey}
                />
              ) : (
                <div className="detail-aside-fallback">周辺地図</div>
              )}
            </div>
            <div className="detail-aside-block">
              <strong>所在地</strong>
              <p>{parkingLot.address}</p>
            </div>
            <div className="detail-aside-block">
              <strong><Info size={14} aria-hidden="true" /> 掲載情報について</strong>
              <p>公開されている公式情報をもとに掲載しています。</p>
              {parkingLot.sourceUrl && (
                <a
                  href={parkingLot.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  公式情報を確認
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
