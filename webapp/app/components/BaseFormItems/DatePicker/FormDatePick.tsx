import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
interface errosForm {
  name: string;
  type: string;
  message: string;
  ref: any;
}
interface IProps {
  name: string;
  register: UseFormRegister<any>;
  classCu?: string;
  validation?: {};
  error?: errosForm | FieldError;
}

const FormDatePic: React.FC<IProps> = ({
  name,
  register,
  classCu,
  error,
  validation,
}) => {
  return (
    <div className="flex flex-col w-[90%] px-4">
    
      <input
        type="date"
        className={`border-2 bg-gray-100 focus-visible:outline-blue-200 text-indigo-900  ${
          error ? "border-red-600" : "border-gray-200"
        } rounded-[10px] py-3 px-2  ${classCu}`}
        {...register(name, validation)}
        name={name}
      />
    </div>
  );
};

export default FormDatePic;
