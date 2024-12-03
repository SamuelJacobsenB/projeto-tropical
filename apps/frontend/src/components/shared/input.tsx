import React from "react";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}

export const Input = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  className,
  maxLength,
  minLength,
  required = false,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <label htmlFor={name} className="text-lg font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`text-lg h-10 p-3 border-2 border-light-primary rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 ease-in-out ${className}`}
        placeholder={placeholder}
        minLength={minLength}
        min={minLength}
        maxLength={maxLength}
        max={maxLength}
        required={required}
      />
    </div>
  );
};
