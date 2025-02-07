import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type = "text", register, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        className={`mt-1 block w-full px-12 p-1 rounded-3xl border-gray-300 shadow-sm ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default FormInput;
