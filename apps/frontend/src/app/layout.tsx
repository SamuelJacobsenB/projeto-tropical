import type { Metadata } from "next";
import { Providers } from "@/contexts/providers";
import { Message, ProductModal, Order } from "@/components";
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
          <Order />
          {children}
        </body>
      </html>
    </Providers>
  );
}
