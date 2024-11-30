import type { Metadata } from "next";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tropical - Cardápio",
  description: "Tropical - Cardápio",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
