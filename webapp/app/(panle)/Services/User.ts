import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { IrequestBody, userRegister } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

const login = async (user: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
    user,
    getAxiosConfig("json")
  );
};
const register = async (user: userRegister) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/createNewUser`,
    user,
    getAxiosConfig("json")
  );
};

const getAllUser = async ({ queryKey }: { queryKey: [string, IrequestBody] }) => {
  const [, requestBody] = queryKey;
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/getAllUsers`,
    requestBody,
    getAxiosConfig("json")
  );
};
/****************************Hocks************************************* */
export const useLogin = () => {
  const router = useRouter();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: login,
    onSuccess: (res) => {
      toast("با موفقیت انجام شد", {
        style: toastColor("sucess"),
      });
      const token = res.data.data.token;
      //localStorage.setItem("token", token)
      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24}`;
      router.push("/dashboard");
    },
    onError: (error) => {
      toast(error.message || "خطا رخ داد", {
        style: toastColor("error"),
      })




    },
  });
};
export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useGetAllUsers = (requestBody: IrequestBody) => {
  return useQuery({
    queryKey: ["users", requestBody],
    queryFn: getAllUser,
    select: (data: any) => data.data,




  });
};
