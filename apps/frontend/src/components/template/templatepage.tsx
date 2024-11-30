import React from "react";

export interface TemplatePageProps {
  children: React.ReactNode;
}

export const TemplatePage = ({ children }: TemplatePageProps) => {
  return (
    <main className="bg-light-primary w-screen min-h-screen pt-40 md:pt-0 md:pl-60">
      {children}
    </main>
  );
};
