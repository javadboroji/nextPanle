import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";

interface changeStatusDto {
    id: number,
    status: string
}


const getAllTaskApi = async () => {
    return await instance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/getAllUserTasks`,
        getAxiosConfig("json")
    );
}
const changeStatusApi = async (payload: changeStatusDto) => {
    return await instance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/changeStatus`,
        payload,
        getAxiosConfig("json")
    );
}

export const useGetAllTask = () => {
    return useQuery({
        queryKey: ["Taska"],
        queryFn: getAllTaskApi,
        refetchOnWindowFocus: false,
        select: (data: any) => data.data.data,

    });
};
export const useChangeStatus = () => {
    const queryClient = useQueryClient()
    return useMutation<AxiosResponse<any>, Error, any, string[]>({
        mutationFn: changeStatusApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Taska"] })
            toast("با موفقیت انجام شد", {
                style: toastColor("sucess"),
            });

        },
        onError: (error) => {
            toast(error.message || "خطا رخ داد", {
                style: toastColor("error"),
            })




        },
    });
}