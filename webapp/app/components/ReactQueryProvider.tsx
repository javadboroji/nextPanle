"use client"
import { queryClient } from "@/lib/queryClient";
import {  QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  //const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
