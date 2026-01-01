"use client"
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled'
import Link from 'next/link'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLogin } from '../../Services/User';

interface LoginFormProps {
  onsucessCallback?: () => void
}
interface Inputs {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().required("ایمیل کاربری اجباری می باشد"),
  password: yup.string().required("پسورد   اجباری می باشد"),
});
function LoginForm(props: LoginFormProps) {
  const { onsucessCallback } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const { mutate } = useLogin();
  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data, {
    onSuccess: () => {
      if (onsucessCallback) {
        onsucessCallback()
      }
    }
  });
  return (
    <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
      <span className="text-sm p-2"> نام کاربری</span>
      <FormTextFiled
        type="text"
        name="email"
        placeholder="نام کاربری را وارد کنید"
        register={register}
        error={errors.email}
        classCu="mb-2 text-sm"
      />
      <span className="text-sm p-2"> رمز عبور </span>
      <FormTextFiled
        type="password"
        name="password"
        placeholder="رمز عبور را واردکنید"
        register={register}
        error={errors.password}
        classCu="mb-2 text-sm"
      />
      <Link
        className="text-blue-600 text-sm my-2 mr-auto ml-0 flex justify-end"
        href={"/"}
      >
        {" "}
        رمز عبور را فراموش کرده اید ؟
      </Link>
      <button
        type="submit"
        className="hover:cursor-pointer w-full text-white bg-blue-500 block rounded-2xl p-3 my-4"
      >
        {" "}
        ورود
      </button>
    </form>
  )
}

export default LoginForm