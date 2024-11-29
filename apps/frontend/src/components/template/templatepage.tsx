import React from "react";

export interface TemplatePageProps {
  children: React.ReactNode;
}

export const TemplatePage = ({ children }: TemplatePageProps) => {
  return (
    <main className="bg-light-primary w-full min-h-full mt-40 md:w-full md:mt-0 md:ml-60 md:min-h-screen">
      {children}
    </main>
  );
};
