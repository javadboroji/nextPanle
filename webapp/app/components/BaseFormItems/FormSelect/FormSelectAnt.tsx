import { ISelectItem } from '@/types';
import { Select } from 'antd';
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form';


interface IProps {
    name: string;
    control: UseFormReturn<any>["control"];
    placeholder?: string;
    SelectItems: ISelectItem[];
    className?: string;
}
const FormSelectAnt: React.FC<IProps> = ({
    name,
    control,
    placeholder,
    SelectItems,
    className,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    {placeholder && <label htmlFor={name}>{placeholder}</label>}
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
                </>
            )}
        />
    )
}

export default FormSelectAnt