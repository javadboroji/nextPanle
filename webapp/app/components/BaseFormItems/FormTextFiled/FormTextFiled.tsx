import React from "react";
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";
interface errosForm {
  name: string;
  type: string;
  message: string;
  ref: any;
}
interface IProps {
  name: string;
  placeholder: string;
  type: "password" | "text" | "number";
  register: UseFormRegister<any>;
  classCu?: string;
  validation?: {};
  error?: errosForm | FieldError;
}

const FormTextFiled: React.FC<IProps> = ({
  name,
  placeholder,
  type,
  register,
  classCu,
  validation,
  error,
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        className={`border-[1px] bg-gray-50 focus-visible:outline-blue-200   ${error? 'border-red-600':'border-gray-200'} rounded-[10px] py-3 px-2  ${classCu}`}
        {...register(name, validation)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-600">{error?.message}</p>}
    </div>
  );
};

export default FormTextFiled;
