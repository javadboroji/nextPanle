import ModalLayout from '@/app/components/Modal/ModalLayout';
import React from 'react'
import useAddProductConatiner from '../hook/useAddProductConatiner';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
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
                    <div className="w-1/3 px-1">
                        <FormTextFiled
                            type="text"
                            name="title"
                            placeholder="نام    "
                            register={action.register}
                            error={values.errors.title}
                            classCu="mb-2 text-sm"
                        />
                    </div>
                    <div className="w-1/3 px-1">
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
                            name="price"
                            placeholder="قیمت    "
                            register={action.register}
                            error={values.errors.price}
                            classCu="mb-2 text-sm"
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

            </form>
        </ModalLayout>
    )
}

export default AddProduct