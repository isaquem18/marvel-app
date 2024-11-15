import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { Metadata } from "next";
import GlobalStyles from "@/styles/GlobalStyles";
import { Roboto } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import ContextsProvider from "@/context";

export const metadata: Metadata = {
  title: "MarvelApp",
  description: "Tudo sobre os heróis da Marvel",
};

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={roboto.className}>
        <ContextsProvider>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ContextsProvider>
      </body>
    </html>
  );
}
