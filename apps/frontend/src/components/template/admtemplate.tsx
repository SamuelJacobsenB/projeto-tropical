import React from "react";

import { AdmMenu, TemplatePage } from "..";

interface AdmTemplateProps {
  children: React.ReactNode;
}

export const AdmTemplate = ({ children }: AdmTemplateProps) => {
  return (
    <div className="flex flex-col max-w-screen min-h-screen md:flex-row">
      <AdmMenu />
      <TemplatePage>{children}</TemplatePage>
    </div>
  );
};
