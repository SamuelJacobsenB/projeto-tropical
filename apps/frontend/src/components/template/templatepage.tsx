import React from "react";

export interface TemplatePageProps {
  children: React.ReactNode;
}

export const TemplatePage = ({ children }: TemplatePageProps) => {
  return (
    <main className="bg-light-primary w-full h-full md:h-screen">
      {children}
    </main>
  );
};
