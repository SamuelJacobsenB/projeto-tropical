import React from "react";
import { Menu, TemplatePage } from "../index";

export interface TemplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <div className="flex flex-col max-w-screen min-h-screen md:flex-row">
      <Menu />
      <TemplatePage>{children}</TemplatePage>
    </div>
  );
};
