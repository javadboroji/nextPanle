import { useGetAllProductCategories, useGetAllProductTags } from "@/app/(panle)/Services/product.service";
import covertDataToselectOption from "@/app/helper/covertDataToselectOption";
import { IProduct, IProductCategory, IProductTags } from "@/types";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type TProductInputs = Omit<IProduct, "id" | "image_url" | "createBy">
const useAddProductConatiner = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TProductInputs>();

    const onSubmit: SubmitHandler<TProductInputs> = (data) => console.log(data);
    /* ------------------------------- // Api Call ------------------------------ */

    const { data: categoryes } = useGetAllProductCategories()

    const { data: tags } = useGetAllProductTags()

    const categoryOptions = covertDataToselectOption<IProductCategory>(categoryes, r => r.persionName, r => r.id)
    const tagsOptions = covertDataToselectOption<IProductTags>(categoryes, r => r.persionName, r => r.id)






    return {
        values: {
            errors, categoryOptions, tagsOptions
        },
        action: {
            onSubmit, handleSubmit, control, register
        }
    }
}
export default useAddProductConatiner