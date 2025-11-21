import ModalLayout from '@/app/components/Modal/ModalLayout';
import React, { useEffect } from 'react'
import useAddProductConatiner from '../hook/useAddProductConatiner';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
import FormSelectAnt from '@/app/components/BaseFormItems/FormSelect/FormSelectAnt';
import { SubmitHandler } from 'react-hook-form';
import { createProduct } from '../types';
import { Button } from 'antd';
interface addProductProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const AddProduct: React.FC<addProductProps> = ({ open, setOpen }) => {

    const { values, action } = useAddProductConatiner();
    useEffect(() => {
        console.log(values.errors);

    }, [values.errors])

    return (
        <ModalLayout open={open} setOpen={setOpen} size='70%'>
            <form
                className="my-4 p-6 bg-white rounded-2xl shadow-lg max-w-4xl "
                onSubmit={action.handleSubmit(action.onSubmit)}
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-700">ثبت محصول جدید</h2>

                <div className="flex flex-wrap -mx-2">
                    {/* نام محصول */}
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <FormTextFiled
                            type="text"
                            name="title"
                            placeholder="نام محصول"
                            register={action.register}
                            error={values.errors.title}
                            classCu="text-sm"
                        />
                    </div>

                    {/* قیمت */}
                    <div className="w-full md:w-1/4 px-2 mb-4">
                        <FormTextFiled
                            type="number"
                            name="price"
                            placeholder="قیمت"
                            register={action.register}
                            error={values?.errors?.price}
                            classCu="text-sm"
                        />
                    </div>

                    {/* تعداد */}
                    <div className="w-full md:w-1/4 px-2 mb-4">
                        <FormTextFiled
                            type="number"
                            name="count"
                            placeholder="تعداد"
                            register={action.register}
                            error={values.errors.count}
                            classCu="text-sm"
                        />
                    </div>

                    {/* کد */}
                    <div className="w-full md:w-1/4 px-2 mb-4">
                        <FormTextFiled
                            type="number"
                            name="code"
                            placeholder="کد محصول"
                            register={action.register}
                            error={values.errors.code}
                            classCu="text-sm"
                        />
                    </div>

                    {/* مدل */}
                    <div className="w-full md:w-1/4 px-2 mb-4">
                        <FormTextFiled
                            type="text"
                            name="model"
                            placeholder="مدل"
                            register={action.register}
                            error={values.errors.model}
                            classCu="text-sm"
                        />
                    </div>

                    {/* بارکد */}
                    <div className="w-full md:w-1/4 px-2 mb-4">
                        <FormTextFiled
                            type="number"
                            name="barcode"
                            placeholder="سریال بارکد"
                            register={action.register}
                            error={values.errors.barcode}
                            classCu="text-sm"
                        />
                    </div>

                    {/* تعداد موجودی */}
                    <div className="w-full md:w-1/4 px-2 mb-4">
                        <FormTextFiled
                            type="number"
                            name="quantity"
                            placeholder="موجودی"
                            register={action.register}
                            error={values.errors.quantity}
                            classCu="text-sm"
                        />
                    </div>

                    {/* دسته بندی */}
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <FormSelectAnt
                            name="categoryId"
                            control={action.control}
                            className="w-full"
                            placeholder="دسته بندی"
                            SelectItems={values.categoryOptions ?? []}
                            error={values.errors.categoryId}
                        />
                    </div>

                    {/* تگ */}
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <FormSelectAnt
                            name="tagId"
                            control={action.control}
                            className="w-full"
                            placeholder="تگ"
                            SelectItems={values.tagsOptions ?? []}
                            error={values.errors.tagId}
                        />
                    </div>

                    {/* توضیحات */}
                    <div className="w-full px-2 mb-4">
                        <FormTextFiled
                            type="text"
                            name="description"
                            placeholder="توضیحات"
                            register={action.register}
                            error={values.errors.description}
                            classCu="text-sm"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button
                        htmlType="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl py-2 px-6 transition-all duration-200"
                    >
                        ثبت محصول
                    </Button>
                </div>
            </form>
        </ModalLayout>

    )
}

export default AddProduct