import React from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ type, className, children, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`p-3 flex justify-center text-lg rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
