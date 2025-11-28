import { Typography } from 'antd'
import React, { forwardRef } from 'react'
import { errosForm } from './FormTextFiled';


type TextFieldProps = {
    inpValue: string,
    onchangeInput: (e: any) => void
    name: string;
    placeholder: string;
    type: "password" | "text" | "number";
    classCu?: string;
    error?: errosForm;
    rest?: any
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { name, placeholder, type, classCu, error, inpValue, onchangeInput, ...rest } = props;

    return (
        <div className="flex flex-col w-full relative py-3">
            <Typography.Text className="!text-gray-400">{placeholder}</Typography.Text>

            <input
                {...rest}
                ref={ref}           // ⬅ اینجا اجازه استفاده از ref
                value={inpValue}
                onChange={onchangeInput}
                className={`border-[1px] bg-gray-50 focus-visible:outline-blue-200  
        dark:border-gray-700 dark:bg-midnight-ndigo dark:text-white dark:focus-visible:outline-blue-900  
        ${error ? 'border-red-600' : 'border-gray-200'} 
        rounded-[10px] py-3 px-2 ${classCu}`}
                name={name}
                type={type}
            />
        </div>
    );
});
export default TextField