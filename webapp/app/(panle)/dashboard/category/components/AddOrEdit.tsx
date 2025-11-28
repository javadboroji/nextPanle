import { useAddCategory } from '@/app/(panle)/Services/productCategory.service'
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled'
import ModalLayout from '@/app/components/Modal/ModalLayout'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


type TypeAddOrEditProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}
type TypeCategory = {
    persionName: string;
    title: string;
}
function AddOrEdit(props: TypeAddOrEditProps) {
    const { open, setOpen } = props;
    const { mutate } = useAddCategory()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TypeCategory>();
    const onSubmit: SubmitHandler<TypeCategory> = (data) => mutate(data, { onSuccess: () => setOpen(false) })

    return (
        <ModalLayout open={open} setOpen={setOpen} size='50%'>
            <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center">
                    <div className="w-1/2 px-1">
                        <FormTextFiled
                            type="text"
                            name="persionName"
                            placeholder="نام دسته بندی"
                            register={register}
                            error={errors.persionName}
                        />
                    </div>
                    <div className="w-1/2 px-1">
                        <FormTextFiled
                            type="text"
                            name="title"
                            placeholder="نام انگلیسی"
                            register={register}
                            error={errors.title}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="
                                relative overflow-hidden 
                                bg-gradient-to-r from-indigo-500 to-blue-500
                                hover:from-indigo-600 hover:to-blue-600
                                text-white font-medium 
                                rounded-2xl py-2 px-8
                                shadow-lg hover:shadow-xl
                                transition-all duration-300 active:scale-95
                                "
                    >
                        <span className="relative z-10">ثبت </span>

                        <span
                            className="
                                absolute inset-0 bg-white/10 
                                blur-xl opacity-0 
                                group-hover:opacity-40
                                transition-opacity duration-300
                            "
                        ></span>
                    </button>
                </div>
            </form>
        </ModalLayout>
    )
}

export default AddOrEdit