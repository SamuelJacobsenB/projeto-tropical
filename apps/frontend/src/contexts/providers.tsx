"use client";

import React from "react";
import {
  QueryProvider,
  MessageProvider,
  ProductModalProvider,
  OrderProvider,
  ModalOptionsProvider,
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
            <OrderProvider>
              <ModalOptionsProvider>{children}</ModalOptionsProvider>
            </OrderProvider>
          </ProductModalProvider>
        </MessageProvider>
      </QueryProvider>
    </>
  );
};
