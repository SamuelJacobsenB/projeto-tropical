import React from "react";

interface SelectProps {
  name: string;
  label: string;
  value: string | number;
  options: Array<{ value: string | number; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  required?: boolean;
}

export const Select = ({
  name,
  label,
  value,
  options,
  onChange,
  className,
  required = false,
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1 p-2 w-full">
      <label htmlFor={name} className="text-lg font-semibold text-gray-700">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`text-lg h-10 pl-1 border-2 border-light-primary rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 ease-in-out cursor-pointer ${className}`}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
