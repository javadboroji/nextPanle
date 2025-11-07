import ModalLayout from '@/app/components/Modal/ModalLayout';
import React from 'react'
import useAddProductConatiner from '../hook/useAddProductConatiner';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
import FormSelectAnt from '@/app/components/BaseFormItems/FormSelect/FormSelectAnt';
interface addProductProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const AddProduct: React.FC<addProductProps> = ({ open, setOpen }) => {

    const { values, action } = useAddProductConatiner()
    return (
        <ModalLayout open={open} setOpen={setOpen}>
            <form className="my-4" onSubmit={action.handleSubmit(action.onSubmit)}>
                <div className="flex flex-wrap items-center p-4">
                    <div className="w-1/2 px-1">
                        <FormTextFiled
                            type="text"
                            name="title"
                            placeholder="نام    "
                            register={action.register}
                            error={values.errors.title}
                            classCu="mb-2 text-sm"
                        />
                    </div>
                    <div className="w-1/4 px-1">
                        <FormTextFiled
                            type="number"
                            name="price"
                            placeholder="قیمت    "
                            register={action.register}
                            error={values.errors.price}
                            classCu="mb-2 text-sm"
                        />
                    </div>
                    <div className="w-1/4 px-1">
                        <FormTextFiled
                            type="number"
                            name="count"
                            placeholder="تعداد    "
                            register={action.register}
                            error={values.errors.count}
                            classCu="mb-2 text-sm"
                        />
                    </div>

                    <div className="w-1/3 px-1">
                        <FormTextFiled
                            type="number"
                            name="code"
                            placeholder="کد "
                            register={action.register}
                            error={values.errors.price}
                            classCu="mb-2 text-sm"
                        />
                    </div>
                    <div className="w-1/3 px-1">
                        <FormTextFiled
                            type='text'
                            name="model"
                            placeholder="مدل "
                            register={action.register}
                            error={values.errors.price}
                            classCu="mb-2 text-sm"
                        />
                    </div>
                    <div className="w-1/3 px-1">
                        <FormTextFiled
                            type="number"
                            name="barcode"
                            placeholder="سریال بارکد "
                            register={action.register}
                            error={values.errors.price}
                            classCu="mb-2 text-sm"
                        />
                    </div>
                    <div className="w-1/2 px-1">
                        <FormSelectAnt
                            name="categoryId"
                            //register={register}
                            control={action.control}
                            className=" p-4"
                            placeholder="دسته بندی"
                            SelectItems={values.categoryOptions ?? []}
                            error={values.errors.categoryId}

                        />
                    </div>
                    <div className="w-1/2 px-1">
                        <FormSelectAnt
                            name="tagId"
                            //register={register}
                            control={action.control}
                            className=" p-4"
                            placeholder="تگ"
                            SelectItems={values.tagsOptions ?? []}
                            error={values.errors.tagId}

                        />
                    </div>
                    <div className="w-full px-1">
                        <FormTextFiled
                            type="text"
                            name="description"
                            placeholder="توضیحات    "
                            register={action.register}
                            error={values.errors.description}
                            classCu="mb-2 text-sm"
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
    )
}

export default AddProduct