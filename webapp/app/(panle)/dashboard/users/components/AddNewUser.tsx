import ModalLayout from "@/app/components/Modal/ModalLayout";
import { IRoles } from "@/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormTextFiled from "@/app/components/BaseFormItems/FormTextFiled/FormTextFiled";
import { useGetRoles } from "@/app/(panle)/Services/roles.service";
import covertDataToselectOption from "@/app/helper/covertDataToselectOption";
import { useRegister } from "@/app/(panle)/Services/User";
import FormSelectAnt from "@/app/components/BaseFormItems/FormSelect/FormSelectAnt";


interface adduserProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
type addUserInputs = {
  name: string;
  email?: string;
  role?: string;
  status?: number;
  password: string;
};

// const schema = yup.object({
//   name: yup.string().required("نام کاربری اجباری می باشد"),
//   password: yup.string().required("پسورد   اجباری می باشد"),
//   role: yup.string().notRequired(),
//   status: yup.number().notRequired(),
//   email: yup.string().email().notRequired(),
// });

const AddNewUser: React.FC<adduserProps> = ({ open, setOpen }) => {
  const{data:roles}= useGetRoles();
  const{mutate}= useRegister()
    const roleOptions = covertDataToselectOption<IRoles>(roles?.data?.data??[],r=>r.title ,r=>r.id)
  const {
    register,
    handleSubmit,
    control ,
    formState: { errors },
  } = useForm<addUserInputs>();
  const onSubmit: SubmitHandler<addUserInputs> = (data) => mutate(data);

  return (
    <div>
      <ModalLayout open={open} setOpen={setOpen}>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap items-center p-4">
            <div className="w-1/2 px-1">
              <FormTextFiled
                type="text"
                name="name"
                placeholder="نام    "
                register={register}
                error={errors.name}
                classCu="mb-2 text-sm"
              />
            </div>
            <div className="w-1/2 px-1">
              <FormTextFiled
                type="text"
                name="email"
                placeholder=" ایمیل"
                register={register}
                error={errors.name}
                classCu="mb-2 text-sm"
              />
            </div>
            <div className="w-1/2 px-1">
              <FormSelectAnt  
                name="role"
                //register={register}
                control={control}
                className="mb-2 p-4"
                // placeholder="نقش"
                SelectItems={roleOptions ??[]}

              />
            </div>
            <div className="w-1/2 px-1">
              <FormTextFiled
                type="password"
                name="password"
                placeholder="رمز عبور  "
                register={register}
                error={errors.password}
                classCu="mb-2 text-sm"
              />
            </div>
          </div>

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
