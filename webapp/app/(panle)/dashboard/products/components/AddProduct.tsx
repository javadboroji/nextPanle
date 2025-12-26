import ModalLayout from '@/app/components/Modal/ModalLayout';
import React from 'react'
import useAddProductConatiner from '../hook/useAddProductConatiner';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
import FormSelectAnt from '@/app/components/BaseFormItems/FormSelect/FormSelectAnt';
import Uploader from '@/app/components/Uploader/Uploader';
interface addProductProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const AddProduct: React.FC<addProductProps> = ({ open, setOpen }) => {

    const { values, action } = useAddProductConatiner(setOpen ,open);


    return (
        <ModalLayout open={open} setOpen={setOpen} size='70%'>
            <div className='flex items-baseline justify-between'>
                <form
                    className="my-4 mx-2 p-6 bg-white dark:bg-slate-800 rounded-2xl w-2/3"
                    onSubmit={action.handleSubmit(action.onSubmit)}
                >
                    <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">ثبت محصول جدید</h2>

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
                                multi={true}
                                classCu="text-sm"

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
                            <span className="relative z-10">ثبت محصول</span>

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
                <div className="my-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full md:w-1/3 flex flex-col gap-6 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-50 text-lg">
                            آپلود تصاویر
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                            اختیاری
                        </span>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                        لطفاً تصویر شاخص و در صورت نیاز چند تصویر از زوایای مختلف محصول آپلود کنید.
                        فرمت‌های مجاز: JPG, PNG – حداکثر ۲ مگابایت.
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-700 dark:text-gray-100 text-sm">
                                تصویر شاخص
                            </h4>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">
                                نمایش در لیست محصولات
                            </span>
                        </div>

                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-600 rounded-xl p-4 bg-slate-50/60 dark:bg-slate-900/40 hover:border-slate-400 dark:hover:border-slate-400 transition-colors">
                            <Uploader setimagesUploaded={action.setProductImage} />

                            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                                <span>حداکثر ۱ تصویر</span>
                                <span>ترجیحاً نسبت ۱:۱</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-700 dark:text-gray-100 text-sm">
                                تصاویر گالری محصول
                            </h4>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">
                                حداکثر ۶ تصویر
                            </span>
                        </div>

                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-600 rounded-xl p-4 bg-slate-50/60 dark:bg-slate-900/40 hover:border-slate-400 dark:hover:border-slate-400 transition-colors">
                            <Uploader setimagesUploaded={action.setImageList} maxCount={6} />

                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500">
                                <span>برای اضافه کردن زاویه‌های مختلف محصول استفاده کنید.</span>
                                <span>می‌توانید تصاویر را بکشید و رها کنید.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </ModalLayout>

    )
}

export default AddProduct