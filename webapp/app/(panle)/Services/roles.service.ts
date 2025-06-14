import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";

const addRole = async (role: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/roles/addRole`,
    role,
    getAxiosConfig("json")
  );
};

const getRoles = async () => {
  return await instance.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/roles/get`,
    getAxiosConfig("json")
  );
};
const getRolesWithPagnation = async (body: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/roles/getAllRoles`,
    body,
    getAxiosConfig("json")
  );
};

export const useAddRole = () => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: addRole,
    onSuccess: () => {
      toast(" با موفقیت اضافه شد", { style: toastColor("sucess") });
    },
    onError: (err: any) => {
      toast(" خطایی رخ داده است", { style: toastColor("error") });
    },
  });
};

export const useGetRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });
};
export const useGetRoleWithPagnation = () => {
  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: getRolesWithPagnation,
    onError: (error) => {
      console.log(error);
    },
  });
};
