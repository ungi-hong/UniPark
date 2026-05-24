"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

function useMocksReady(): boolean {
  const [ready, setReady] = useState(
    process.env.NEXT_PUBLIC_API_MOCKING !== "enabled",
  );
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (process.env.NEXT_PUBLIC_API_MOCKING !== "enabled") return;
    void import("@/mocks").then(({ startMocks }) =>
      startMocks().finally(() => setReady(true)),
    );
  }, []);

  return ready;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60_000, refetchOnWindowFocus: false },
        },
      }),
  );
  const mocksReady = useMocksReady();

  // モック起動中はクエリを走らせない (空タブで一瞬待つだけ)
  if (!mocksReady) return null;

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
