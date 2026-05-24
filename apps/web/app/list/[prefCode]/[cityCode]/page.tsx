"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { use } from "react";
import { api } from "@/lib/api-client";

const PER_PAGE = 20;

export default function ParkingLotsListPage({
  params,
  searchParams,
}: {
  params: Promise<{ prefCode: string; cityCode: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { prefCode, cityCode } = use(params);
  const sp = use(searchParams);
  const pageNum = Math.max(1, Number(sp.page ?? 1));

  const { data, isLoading, error } = useQuery({
    queryKey: ["parking-lots", "by-city", cityCode, pageNum, PER_PAGE],
    queryFn: () =>
      api.listParkingLotsByCity(cityCode, {
        page: pageNum,
        perPage: PER_PAGE,
      }),
  });

  const totalPages = data
    ? Math.max(1, Math.ceil(data.total / data.perPage))
    : 1;
  const basePath = `/list/${prefCode}/${cityCode}`;

  return (
    <div className="flex flex-1 flex-col px-4 py-6">
      <header className="mb-6 space-y-1">
        <Link href={`/list/${prefCode}`} className="text-xs text-zinc-500">
          ← 市区町村一覧
        </Link>
        <h1 className="text-xl font-semibold">駐車場一覧</h1>
        {data && (
          <p className="text-xs text-zinc-500">
            {data.total} 件 ・ {pageNum} / {totalPages} ページ
          </p>
        )}
      </header>

      {isLoading && <p className="text-sm text-zinc-500">読み込み中…</p>}
      {error && (
        <p className="text-sm text-red-600">読み込みに失敗しました</p>
      )}
      {data && data.items.length === 0 && (
        <p className="text-sm text-zinc-500">
          この市区町村には登録された駐車場がありません。
        </p>
      )}

      <ul className="space-y-2">
        {data?.items.map((p) => (
          <li key={p.id}>
            <Link
              href={`/parking/${p.id}`}
              className="block rounded-xl border border-zinc-200 px-4 py-3 hover:bg-zinc-50"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-sm leading-snug font-medium">{p.name}</h2>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs whitespace-nowrap text-zinc-700">
                  車椅子 {p.accessibleSpaceTotal}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">{p.address}</p>
            </Link>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <nav className="mt-6 flex items-center justify-between text-sm">
          {pageNum > 1 ? (
            <Link
              href={{ pathname: basePath, query: { page: pageNum - 1 } }}
              className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
            >
              ← 前へ
            </Link>
          ) : (
            <span className="px-3 py-2 text-zinc-300">← 前へ</span>
          )}
          <span className="text-zinc-500">
            {pageNum} / {totalPages}
          </span>
          {pageNum < totalPages ? (
            <Link
              href={{ pathname: basePath, query: { page: pageNum + 1 } }}
              className="rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100"
            >
              次へ →
            </Link>
          ) : (
            <span className="px-3 py-2 text-zinc-300">次へ →</span>
          )}
        </nav>
      )}
    </div>
  );
}
