"use client";
import { ApiProvider } from "./Api";
import { NavigationProvider } from "./NavigationData";
import ReactQueryProvider from "./ReactQueryProvider";

export default function ContextsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ApiProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ApiProvider>
    </ReactQueryProvider>
  );
}
