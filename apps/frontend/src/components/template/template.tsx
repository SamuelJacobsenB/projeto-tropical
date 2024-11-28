import React from "react";
import { Menu, TemplatePage } from "../index";

export interface TemplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <Menu />
      <TemplatePage>{children}</TemplatePage>
    </div>
  );
};
