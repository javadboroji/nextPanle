import ModalLayout from "@/app/components/Modal/ModalLayout";
import { IRoles } from "@/types";
import React, { useEffect } from "react";
import * as yup from 'yup';
import { SubmitHandler, useForm } from "react-hook-form";
import FormTextFiled from "@/app/components/BaseFormItems/FormTextFiled/FormTextFiled";
import { useGetRoles } from "@/app/(panle)/Services/roles.service";
import covertDataToselectOption from "@/app/helper/covertDataToselectOption";
import { useRegister } from "@/app/(panle)/Services/User";
import FormSelectAnt from "@/app/components/BaseFormItems/FormSelect/FormSelectAnt";
import { yupResolver } from "@hookform/resolvers/yup";
import toastColor from "@/app/helper/toastColor";
import { toast } from "sonner";


export type addUserInputs = {
  name: string;
  email: string;
  roleId: number;
  status?: number;
  password: string;
};
interface adduserProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  initialData: null | addUserInputs
}


const schema = yup.object({
  name: yup.string().notRequired(),
  password: yup.string().required("پسورد   اجباری می باشد"),
  roleId: yup.number().required("نقش اجباری می باشد"),
  // status: yup.number().notRequired(),
  email: yup.string().email().required("ایمیل اجباری می باشد"),
});

const AddNewUser: React.FC<adduserProps> = ({ open, setOpen, initialData }) => {

  const { data: roles } = useGetRoles();

  const { mutate } = useRegister()

  const roleOptions = covertDataToselectOption<IRoles>(roles?.data?.data ?? [], r => r.persionName, r => r.id)


  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },

  } = useForm<addUserInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      roleId: 0,
      password: ""
    }
  });
  useEffect(() => {
    if (initialData) {
      reset(initialData)
    }
  }, [initialData])





  const onSubmit: SubmitHandler<addUserInputs> = (data) => mutate(data, {
    onSuccess: () => {
      setOpen(false)
    }
  });

  return (
    <div>
      <ModalLayout open={open} setOpen={setOpen}>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap items-center p-4 ">
            <div className="w-1/3 px-1">
              <FormTextFiled
                type="text"
                name="name"
                placeholder="نام    "
                register={register}
                error={errors.name}
                classCu="text-sm"
              />
            </div>
            <div className="w-1/3 px-1">
              <FormTextFiled
                type="text"
                name="email"
                placeholder=" ایمیل"
                register={register}
                error={errors.email}
                classCu=" text-sm"
              />
            </div>
            <div className="w-1/3 px-1">
              <FormSelectAnt
                name="roleId"
                //register={register}
                control={control}
                className=" p-4"
                placeholder="نقش"
                SelectItems={roleOptions ?? []}
                error={errors.roleId}

              />
            </div>
            <div className="w-1/3 px-1">
              <FormTextFiled
                type="password"
                name="password"
                placeholder="رمز عبور  "
                register={register}
                error={errors.password}
                classCu=" text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="hover:cursor-pointer min-w-2.5 text-white bg-blue-500 block rounded-2xl px-8 py-3 my-4"
            >
              {" "}
              ثبت
            </button>
          </div>
        </form>
      </ModalLayout>
    </div>
  );
};

export default AddNewUser;
