"use client";

import React from "react";
import {
  QueryProvider,
  MessageProvider,
  ProductModalProvider,
  OrderProvider,
  ModalOptionsProvider,
  OrderModalProvider,
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
              <ModalOptionsProvider>
                <OrderModalProvider>{children}</OrderModalProvider>
              </ModalOptionsProvider>
            </OrderProvider>
          </ProductModalProvider>
        </MessageProvider>
      </QueryProvider>
    </>
  );
};
