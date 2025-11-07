import { ISelectItem } from '@/types';
import { Select, Typography } from 'antd';
import React from 'react'
import { Controller, FieldError, UseFormReturn } from 'react-hook-form';
import { errosForm } from '../FormTextFiled/FormTextFiled';


interface IProps {
    name: string;
    control: UseFormReturn<any>["control"];
    placeholder?: string;
    SelectItems: ISelectItem[];
    className?: string;
    error?: errosForm | FieldError;
}
const FormSelectAnt: React.FC<IProps> = ({
    name,
    control,
    placeholder,
    SelectItems,
    className,
    error
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className='relative py-3'>
                    <Typography.Text className="!text-gray-400"> {placeholder}</Typography.Text>
                    <Select
                        {...field}
                        className={`w-full !h-[45px] ${className}`}
                        placeholder={placeholder}
                        options={SelectItems.map((item) => ({
                            label: item.label,
                            value: item.value,
                        }))}
                        onChange={(value) => field.onChange(value)}
                    />
                    {error && <p className="text-red-600 text-xs absolute bottom-0">{error?.message}</p>}
                </div>
            )}
        />
    )
}

export default FormSelectAnt