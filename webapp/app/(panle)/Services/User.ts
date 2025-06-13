import toastColor from "@/app/helper/toastColor";
import useGridBody from "@/app/hooks/useGridBody";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { IrequestBody, userRegister } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner"

const login = async (user: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    user,
    getAxiosConfig("json")
  );
};
const register = async (user: userRegister) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
    user,
    getAxiosConfig("json")
  );
};

const getAllUser = async ({ queryKey }: { queryKey: [string, IrequestBody] }) => {
  const [, requestBody] = queryKey;
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/getAll`,
    requestBody,
    getAxiosConfig("json")
  );
};
export const useLogin = () => {
  const router = useRouter();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: login,
    onSuccess: () => {
      toast("با موفقیت انجام شد" ,{
        style:toastColor("sucess"),
      })
      router.push("/dashboard");
    },
    onError: (error) => {
      toast(error.message || "خطا رخ داد",{
        style:toastColor("error"),
      })




    },
  });
};
export const useRegister = () => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: register,
    onSuccess: (data) => {
      return data.data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useGetAllUsers = (requestBody:IrequestBody) => {
  return useQuery({
    queryKey: ["users" ,requestBody],
    queryFn:getAllUser,
    
    select:(data:any)=> data.data.data , 

    
    
    
  });
};
