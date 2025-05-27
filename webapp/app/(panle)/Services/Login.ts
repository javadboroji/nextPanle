import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

 const login = async (user: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    user,
    getAxiosConfig("json")
  );
};

export const useLogin = () => {
    return useMutation<AxiosResponse<any>, Error, any, string[]>({
      mutationFn: login,
      onSuccess: (data) => {
        return data.data;
      },
      onError: (error) => {
       console.log(error);
       
      },
    });
  };
