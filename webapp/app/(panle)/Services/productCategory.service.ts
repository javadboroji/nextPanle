import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";




const getCategoryWithPagnation = async (body: any) => {
    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-category/GetAllWithPagnation`,
        body,
        getAxiosConfig("json")
    );
};


const addCategory = async (category: any) => {
    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-category/AddOrEdit`,
        category,
        getAxiosConfig("json")
    );
};







export const useAddCategory = () => {
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse<any>, Error, any, string[]>({
        mutationFn: addCategory,
        onSuccess: () => {
            toast(" با موفقیت اضافه شد", { style: toastColor("sucess") });
            queryClient.invalidateQueries({ queryKey: ['categoryWithPagnation'] })
        },
        onError: (err: any) => {
            toast(" خطایی رخ داده است", { style: toastColor("error") });
        },
    });
};

export const useGetCategoryWithPagnation = (body) => {
    return useQuery({
        queryKey: ["categoryWithPagnation" ,body],
        queryFn: () => getCategoryWithPagnation(body),

    });
};