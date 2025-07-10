import React from "react";

import { ISelectItem } from "@/types";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  SelectItems: ISelectItem[];
  placeholder?: string;
  name: string;
  classCu?: string;
  register: UseFormRegister<any>;
}

const FormSelect: React.FC<IProps> = ({
  SelectItems,
  placeholder,
  name,
  classCu,
  register,
}) => {
  return (
    <>
      {placeholder && <label htmlFor={name}>{placeholder}</label>}
      <select
        className={`p-3 w-full  min-w-[10rem] border-[1px]   border-gray-200 rounded-[8px]  ${classCu}`}
        {...register(name)}
      >
        {SelectItems?.map((item, i: number) => {
          return (
            <option
              key={`${item}-${i}`}
              className="p-2 text-lg focus-visible:!border-gray-100 border-gray-50 hover:bg-gray-100"
              value={item.value}
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default FormSelect;
