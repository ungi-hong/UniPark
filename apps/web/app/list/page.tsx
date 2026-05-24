"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { api } from "@/lib/api-client";

export default function PrefecturesListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["regions", "prefectures"],
    queryFn: () => api.listPrefectures(),
  });

  return (
    <div className="flex flex-1 flex-col px-4 py-6">
      <header className="mb-6 space-y-1">
        <Link href="/" className="text-xs text-zinc-500">
          ← マップに戻る
        </Link>
        <h1 className="text-xl font-semibold">都道府県を選ぶ</h1>
      </header>

      {isLoading && <p className="text-sm text-zinc-500">読み込み中…</p>}
      {error && (
        <p className="text-sm text-red-600">読み込みに失敗しました</p>
      )}

      <ul className="space-y-2">
        {data?.map((p) => (
          <li key={p.code}>
            <Link
              href={`/list/${p.code}`}
              className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-sm hover:bg-zinc-50"
            >
              <span>{p.name}</span>
              <span className="text-zinc-400">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
