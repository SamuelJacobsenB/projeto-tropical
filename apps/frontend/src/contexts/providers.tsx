"use client";

import React from "react";
import {
  QueryProvider,
  MessageProvider,
  ProductModalProvider,
  OrderProvider,
} from ".";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryProvider>
        <MessageProvider>
          <ProductModalProvider>
            <OrderProvider>{children}</OrderProvider>
          </ProductModalProvider>
        </MessageProvider>
      </QueryProvider>
    </>
  );
};
