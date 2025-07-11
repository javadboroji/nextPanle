import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
export interface errosForm {
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
  validation?: object;
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
    <div className="flex flex-col w-full relative py-3  ">
      <input
        className={`border-[1px] bg-gray-50 focus-visible:outline-blue-200  
          dark:border-gray-700 dark:bg-midnight-ndigo dark:text-white dark:focus-visible:outline-blue-900  
           ${error ? 'border-red-600' : 'border-gray-200 '} 
           rounded-[10px] py-3 px-2  
           
           ${classCu}`}
        {...register(name, validation)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-600 text-xs absolute bottom-0 right-0">{error?.message}</p>}
    </div>
  );
};

export default FormTextFiled;
