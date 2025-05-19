"use client";
import FormTextFiled from "@/app/components/BaseFormItems/FormTextFiled/FormTextFiled";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import image from "@/public/grid-01.svg";
import Link from "next/link";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLogin } from "../Services/Login";

interface Inputs {
  userName: string;
  password: string;
}
const schema = yup.object({
  userName: yup.string().required("نام کاربری اجباری می باشد"),
  password: yup.string().required("پسورد   اجباری می باشد"),
})

function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({resolver:yupResolver(schema)});
  const{mutate}=  useLogin()
  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data);
  return (
    <div className="flex   h-[100dvh]">
      <div className="w-full lg:w-1/2  p-2 lg:p-4 flex justify-center items-center ">
        <div className="flex flex-col justify-center w-full lg:w-1/2  ">
          <h2 className="text-4xl p-2"> ورود </h2>
          <span className="text-xs p-2">
            {" "}
            برای ورود ایمیل وپسورد خود را وارد کنید!
          </span>
          <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
            <span className="text-sm p-2"> نام کاربری</span>
            <FormTextFiled
              type="text"
              name="userName"
              placeholder="نام کاربری را وارد کنید"
              register={register}
              error={errors.userName}
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
            <Link className="text-blue-600 text-sm my-2 mr-auto ml-0 flex justify-end" href={"/"}> رمز عبور را فراموش کرده اید ؟</Link>
            <button type="submit" className="hover:cursor-pointer w-full text-white bg-blue-500 block rounded-2xl p-3 my-4">
              {" "}
              ورود
            </button>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 h-full bg-[#161950] relative  justify-center items-center">
        <h1 className="text-white text-6xl"> پنل ادمین </h1>
        <div className="absolute to-0 right-0 w-1/3 h-1/3  z-0">
          <Image
            src={image}
            alt="pattern"
            fill
            className="object-center  object-cover "
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 z-0">
          <Image
            src={image}
            alt="pattern"
            fill
            className="object-center  object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
