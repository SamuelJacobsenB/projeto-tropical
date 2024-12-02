import React from "react";

interface ModalBoxProps {
  children: React.ReactNode;
}

export const ModalBox = ({ children }: ModalBoxProps) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen p-4 fixed z-30 bg-black bg-opacity-80">
      <article className="flex flex-col max-w-2xl w-full bg-white overflow-hidden rounded-sm">
        {children}
      </article>
    </div>
  );
};
