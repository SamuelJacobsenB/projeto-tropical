"use client";

import React from "react";
import { QueryProvider } from "./queryprovider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryProvider>{children}</QueryProvider>
    </>
  );
};
