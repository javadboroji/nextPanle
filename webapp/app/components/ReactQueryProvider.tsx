"use client"
import { queryClient } from "@/lib/queryClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  //const [queryClient] = useState(() => new QueryClient());
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,       // ⛔ هیچ retry
        refetchOnWindowFocus: false, // ⛔ وقتی صفحه فعال شد دوباره call نزند
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
