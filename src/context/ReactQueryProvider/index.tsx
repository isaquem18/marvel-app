"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

// Options
const queryClientOptions = {
  defaultOptions: {
    // 5 * 1000
    queries: {
      staleTime: 7200000,
      gcTime: 7200000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
};

const ReactQueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClientStore] = useState(
    () => new QueryClient(queryClientOptions)
  );
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
