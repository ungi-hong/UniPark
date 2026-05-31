"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            ← トップに戻る
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-zinc-900">
            UniPark について
          </h1>

          {/* 概要 */}
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              このアプリについて
            </h2>
            <p className="text-zinc-700">
              UniPark は、東京都内の障がい者割引がある駐車場をモバイルで分かりやすく探せる Web
              アプリケーションです。地図検索と一覧表示で、お近くの駐車場情報を素早く確認できます。
            </p>
          </section>

          {/* 出典 */}
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              情報の出典
            </h2>
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-zinc-700 space-y-3">
              <p>
                このアプリに掲載されている駐車場情報は、以下の出典に基づいています：
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>東京都各区市町村の公式サイト</strong>
                  <br />
                  各自治体が公開している障がい者用駐車場情報
                </li>
                <li>
                  <strong>参考：</strong>
                  <a
                    href="https://shogaisha-techo.com/archives/category/tokyo/?k=駐車場"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    障がい者手帳 | 東京版
                  </a>
                  <br />
                  駐車場情報の参考・比較のため
                </li>
              </ul>
              <p className="pt-2 border-t border-blue-200">
                本アプリは独立した調査に基づいて構築されており、上記サイトからのデータ抽出（スクレイピング）は行っていません。
              </p>
            </div>
          </section>

          {/* 免責事項 */}
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              免責事項
            </h2>
            <div className="rounded-lg bg-amber-50 p-4 text-sm text-zinc-700 space-y-3">
              <p>
                <strong>重要：以下の点をご承知の上、ご利用ください</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  本アプリに掲載されている情報は参考値です。最新性や正確性については、
                  <strong>
                    利用前に必ず各駐車場に直接電話でご確認ください
                  </strong>
                </li>
                <li>
                  営業時間、割引条件、料金は変更される可能性があります
                </li>
                <li>
                  駐車場の営業状況や工事による閉鎖など、予期しない変更がある場合があります
                </li>
                <li>
                  位置情報の精度により、実際の所在地と異なる可能性があります
                </li>
                <li>
                  このアプリの利用によって生じたいかなる損害について、
                  開発者は責任を負いません
                </li>
              </ul>
            </div>
          </section>

          {/* 更新情報 */}
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              データ更新について
            </h2>
            <p className="text-zinc-700">
              本アプリのデータは定期的に確認・更新されます。ただし、
              <strong>
                各施設の最新情報は各駐車場の公式情報が最優先です
              </strong>
              。
            </p>
            <p className="text-sm text-zinc-600">
              誤りを見つけた場合や、最新情報の報告がある場合は、
              お手数ですが開発者までお知らせください。
            </p>
          </section>

          {/* プライバシー */}
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              プライバシーについて
            </h2>
            <p className="text-zinc-700">
              このアプリは、あなたの位置情報を取得する場合があります。
              位置情報は以下の目的でのみ使用されます：
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-1">
              <li>近くの駐車場を検索するため（端末内で処理）</li>
              <li>
                サーバーには送信されません（Service
                Workerによるオフライン対応のため）
              </li>
            </ul>
            <p className="text-sm text-zinc-600 pt-2">
              位置情報の許可は、ブラウザの設定からいつでも取り消せます。
            </p>
          </section>

          {/* お問い合わせ */}
          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">
              お問い合わせ
            </h2>
            <p className="text-zinc-700">
              ご質問やご意見がある場合は、開発者までお気軽にご連絡ください。
            </p>
          </section>

          <hr className="my-12" />

          <div className="text-xs text-zinc-500">
            <p>最終更新：2026年5月31日</p>
          </div>
        </div>
      </div>
    </div>
  );
}
