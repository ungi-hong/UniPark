"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { use } from "react";
import { api } from "@/lib/api-client";

export default function CitiesListPage({
  params,
}: {
  params: Promise<{ prefCode: string }>;
}) {
  const { prefCode } = use(params);

  const { data, isLoading, error } = useQuery({
    queryKey: ["regions", "cities", prefCode],
    queryFn: () => api.listCitiesByPrefecture(prefCode),
  });

  return (
    <div className="flex flex-1 flex-col px-4 py-6">
      <header className="mb-6 space-y-1">
        <Link href="/list" className="text-xs text-zinc-500">
          ← 都道府県一覧
        </Link>
        <h1 className="text-xl font-semibold">市区町村を選ぶ</h1>
      </header>

      {isLoading && <p className="text-sm text-zinc-500">読み込み中…</p>}
      {error && (
        <p className="text-sm text-red-600">読み込みに失敗しました</p>
      )}

      <ul className="space-y-2">
        {data?.map((c) => (
          <li key={c.code}>
            <Link
              href={`/list/${prefCode}/${c.code}`}
              className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-sm hover:bg-zinc-50"
            >
              <span>{c.name}</span>
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">
                  {c.parkingLotCount}
                </span>
                <span className="text-zinc-400">›</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
