"use client"
import FormTextFiled from "@/app/components/BaseFormItems/FormTextFiled/FormTextFiled";
import ButtonFill from "@/app/components/Buttons/ButtonFill";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  userName: string;
  password: string;
}
function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center p-4 rounded-2xl shadow-2xl w-1/2 mx-auto">
      <div className="basis-1/2"></div>
      <div className="basis-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextFiled
            type="text"
            name="userName"
            placeholder="نام کاربری"
            register={register}
            error={errors.userName}
            classCu="mb-2"
          />
          <FormTextFiled
            type="text"
            name="password"
            placeholder="رمزعبور"
            register={register}
            error={errors.password}
             classCu="mb-2"
          />

          <ButtonFill  type="submit">
             ورود
          </ButtonFill>
        </form>
      </div>
    </div>
  );
}

export default page;
