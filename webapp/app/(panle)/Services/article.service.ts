import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";



const addArticle = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('published', data.published)
    formData.append('thumbnail', data.thumbnail)

    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/articles/createNewArticle`,
        formData,
        getAxiosConfig("form")
    );
}


const getArticleApi = async (body: any) => {
    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/articles/getAllWithPagnation`,
        body,
        getAxiosConfig("json")
    );
}
export const useAddArticle = () => {
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse<any>, Error, any, string[]>({
        mutationFn: addArticle,
        onSuccess: () => {
            toast(" با موفقیت اضافه شد", { style: toastColor("sucess") });
            queryClient.invalidateQueries({ queryKey: ['rolesWithPagnation'] })
        },
        onError: (err: any) => {
            toast(" خطایی رخ داده است", { style: toastColor("error") });
        },
    });

}

export const useGetArticleWithPagnation = (body) => {
    return useQuery({
        queryKey: ["articleWithPagnation"],
        queryFn: () => getArticleApi(body),
        select: (data) => {
            return data?.data?.data
        }
    });
};