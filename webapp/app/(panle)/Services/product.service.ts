import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";



const getAllCategoryProduct = async () => {
    return await instance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-category/GetAll`,
        getAxiosConfig("json")
    );
};

const getAllTagProduct = async () => {
    return await instance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-tag/GetAll`,
        getAxiosConfig("json")
    );
};

const getAllProducts = async (body) => {
    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product/GetAllProduct`,
        body,
        getAxiosConfig("json")
    );
}


const addProduct = async (data) => {
    const formData = new FormData();
    console.log(data.imageList);

    formData.append('productName', data.title)
    formData.append('price', data.price)
    formData.append('count', data.count)
    formData.append('code', data.code)
    formData.append('model', data.model)
    formData.append('barcode', data.barcode)
    formData.append('quantity', data.quantity)
    formData.append('categoryId', data.categoryId)
    formData.append('tagId', data.tagId)
    formData.append('description', data.description)
    formData.append('thumbnail', data.productImage)
    if (data.imageList && data.imageList.length > 0) {
        data.imageList.forEach((image: any ,i) => {
            formData.append(`images`, image)
        })
    }
    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product/CreateProduct`,
        formData,
        getAxiosConfig("form")
    );

}
/* --------------------------------- //Hooks -------------------------------- */
export const useGetAllProductCategories = () => {
    return useQuery({
        queryKey: ["GetAllProductCategories"],
        queryFn: () => getAllCategoryProduct(),
        select: (data) => {
            return data?.data?.data
        }
    });
}
export const useGetAllProductTags = () => {
    return useQuery({
        queryKey: ["ProductTags "],
        queryFn: () => getAllTagProduct(),
        select: (data) => {
            return data?.data?.data
        }
    });
}
export const useGetAllProductWithPagnation = (body) => {
    return useQuery({
        queryKey: ["GetAllProduct"],
        queryFn: () => getAllProducts(body),
        select: (data) => {
            return data?.data?.data
        }
    });
}
export const useAddNewProduct = () => {
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse<any>, Error, any, string[]>({
        mutationFn: addProduct,
        onSuccess: () => {
            toast(" با موفقیت اضافه شد", { style: toastColor("sucess") });
            queryClient.invalidateQueries({ queryKey: ['GetAllProduct'] })
        },
        onError: (err: any) => {
            toast(" خطایی رخ داده است", { style: toastColor("error") });
        },
    });
}