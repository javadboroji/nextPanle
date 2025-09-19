import { Checkbox } from 'antd'
import React from 'react'
import { Controller, FieldError, UseFormRegister } from 'react-hook-form';
import { errosForm } from '../FormTextFiled/FormTextFiled';
interface IFormCheckBoxProps {
    label: string,
    name: string,
    control: any;
    classCu?: string;
    validation?: object;
    error?: errosForm | FieldError;
    rules?: object;
}
const FormCheckBox: React.FC<IFormCheckBoxProps> = ({ label, name, control, classCu, error, validation, rules }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <>
                    <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                    >
                        {label}
                    </Checkbox>
                    {fieldState.error && (
                        <p style={{ color: "red" }}>{fieldState.error.message}</p>
                    )}
                </>
            )}
        />
    )
}

export default FormCheckBox