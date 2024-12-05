import type { Metadata } from "next";
import { Providers } from "@/contexts";
import { Message, ProductModal, Order, ModalOptions } from "@/components";
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
          <ModalOptions />
          {children}
        </body>
      </html>
    </Providers>
  );
}
