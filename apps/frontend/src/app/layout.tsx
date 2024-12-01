import type { Metadata } from "next";
import { Providers } from "@/contexts/providers";
import { Message, ProductModal } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tropical - Cardápio",
  description: "Tropical - Cardápio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-br">
        <body>
          <Message />
          <ProductModal />
          {children}
        </body>
      </html>
    </Providers>
  );
}
