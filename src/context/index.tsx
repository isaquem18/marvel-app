"use client";
import { ApiProvider } from "./Api";
import ReactQueryProvider from "./ReactQueryProvider";

export default function ContextsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ApiProvider>{children}</ApiProvider>
    </ReactQueryProvider>
  );
}
