import ModalLayout from "@/app/components/Modal/ModalLayout";
import { User } from "@/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextFiled from "@/app/components/BaseFormItems/FormTextFiled/FormTextFiled";

interface adduserProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
type addUserInputs ={
    name:string ,
    email?:string ,
    role ?:string ,
    status?:number ,
    password:string
}

const schema = yup.object({
  name: yup.string().required("نام کاربری اجباری می باشد"),
  password: yup.string().required("پسورد   اجباری می باشد"),
  role:yup.string().notRequired(),
  status:yup.number().notRequired(),
  email:yup.string().email().notRequired()
});


const AddNewUser: React.FC<adduserProps> = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<addUserInputs>();
  const onSubmit: SubmitHandler<addUserInputs> = (data) => console.log(data);

  return (
    <div>
      <ModalLayout open={open} setOpen={setOpen}>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <FormTextFiled
            type="text"
            name="name"
            placeholder="نام    "
            register={register}
            error={errors.name}
            classCu="mb-2 text-sm"
          />
           <FormTextFiled
            type="text"
            name="email"
            placeholder=" ایمیل"
            register={register}
            error={errors.name}
            classCu="mb-2 text-sm"
          />
          <FormTextFiled
            type="password"
            name="password"
            placeholder="رمز عبور  "
            register={register}
            error={errors.password}
            classCu="mb-2 text-sm"
          />
          <button
            type="submit"
            className="hover:cursor-pointer w-full text-white bg-blue-500 block rounded-2xl p-3 my-4"
          >
            {" "}
            ثبت
          </button>
        </form>
      </ModalLayout>
    </div>
  );
};

export default AddNewUser;
