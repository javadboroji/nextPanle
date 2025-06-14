"use client";
import { useAddRole } from "@/app/(panle)/Services/roles.service";
import FormTextFiled from "@/app/components/BaseFormItems/FormTextFiled/FormTextFiled";
import ModalLayout from "@/app/components/Modal/ModalLayout";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IAddOrEdit {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAddRoleInput {
  name: string;
  title: string;
}
const AddOrEdit: React.FC<IAddOrEdit> = ({ open, setOpen }) => {
  const { mutate } = useAddRole();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAddRoleInput>();
  const onSubmit: SubmitHandler<IAddRoleInput> = (data) => mutate(data);
  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <div className="w-1/2 px-1">
            <FormTextFiled
              type="text"
              name="title"
              placeholder="نام نقش"
              register={register}
              error={errors.name}
            />
          </div>
          <div className="w-1/2 px-1">
            <FormTextFiled
              type="text"
              name="name"
              placeholder="نام انگلیسی"
              register={register}
              error={errors.name}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="hover:cursor-pointer w-fit text-white bg-blue-500 block rounded-2xl py-2 px-8 my-4"
          >
            {" "}
            ثبت
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddOrEdit;
