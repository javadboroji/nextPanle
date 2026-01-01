import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { IrequestBody, userRegister } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import { useRole } from "../context/RoleContext";
import { jwtDecode } from "jwt-decode";
interface Idecode {
  id: string,
  role: string[], exp: number, iat: number
}
const login = async (user: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
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
const deleteUser = async (user: number) => {
  return await instance.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/delete/${user}`,
    getAxiosConfig("json")
  );
};
/****************************Hocks************************************* */
export const useLogin = () => {
  const router = useRouter();
  const { setRole } = useRole()
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: login,
    onSuccess: (res) => {
      toast("با موفقیت انجام شد", {
        style: toastColor("sucess"),
      });
      const token = res.data.data.token;
      //save token in cookie
      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24}`;
      //save Roles in context
      const decode: Idecode = jwtDecode(token);
      setRole([decode.role as any])
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
    onError: (error: AxiosError) => {
      ((error?.response?.data as any)?.message).forEach(element => {
        toast(element || "خطا رخ داد", {
          style: toastColor("error"),
          duration:5000
        })
      });


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
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      console.log(error);
    },
  });
};