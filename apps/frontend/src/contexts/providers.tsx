"use client";

import React from "react";
import { QueryProvider } from "./queryprovider";
import { MessageProvider } from "./message.provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryProvider>
        <MessageProvider>{children}</MessageProvider>
      </QueryProvider>
    </>
  );
};
