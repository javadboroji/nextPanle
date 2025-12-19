import { useAddNewProduct, useGetAllProductCategories, useGetAllProductTags } from "@/app/(panle)/Services/product.service";
import covertDataToselectOption from "@/app/helper/covertDataToselectOption";
import {  IProductCategory, IProductTags } from "@/types";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object({
    title: yup.string().defined().required("عنوان اجباری است"),
    count: yup.number().transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
    ).required("تعداد اجباری است"),
    price: yup.number().transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
    ).required("قیمت اجباری است"),
    barcode: yup.number().transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
    ).required(" بارکد اجباری می باشد"),
    categoryId: yup.number().transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
    ),
    code: yup.number().transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
    ),
    discontPrice: yup.number().transform((value, originalValue) =>
        originalValue === "" ? undefined : Number(originalValue)
    ),
    model: yup.string().optional(),
    quantity: yup.number().required("اجباری می باشد"),
    //status: yup.string().required("اجباری می باشد"),
    tagId: yup.number(),
    description: yup.string(),

});
export type createProduct = yup.InferType<typeof schema>;
const useAddProductConatiner = (setOpen: (open: boolean) => void ,open:boolean) => {
    const [productImage, setProductImage] = useState([]);
    const [imageList, setImageList] = useState([])
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<createProduct>({
        resolver: yupResolver(schema as any)


    });
    const { mutate } = useAddNewProduct()
    const onSubmit: SubmitHandler<createProduct> = (data) => {
        mutate({ ...data, productImage }, {
            onSuccess: () => {
                setOpen(false) ,
                reset()
            }
        })

    }
    /* ------------------------------- // Api Call ------------------------------ */

    const { data: categoryes } = useGetAllProductCategories()

    const { data: tags } = useGetAllProductTags()

    const categoryOptions = covertDataToselectOption<IProductCategory>(categoryes, r => r.persionName, r => r.id)
    const tagsOptions = covertDataToselectOption<IProductTags>(tags, r => r.persionName, r => r.id)





    useEffect(() => {
      reset()
    
      
    }, [open])
    
    return {
        values: {
            errors, categoryOptions, tagsOptions ,imageList
        },
        action: {
            onSubmit, handleSubmit, control, register, setProductImage, setImageList
        }
    }
}
export default useAddProductConatiner