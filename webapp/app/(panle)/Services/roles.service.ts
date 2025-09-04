import toastColor from "@/app/helper/toastColor";
import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";

const addRole = async (role: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/role/createNewRole`,
    role,
    getAxiosConfig("json")
  );
};

const getRoles = async () => {
  return await instance.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/role/getAll`,
    getAxiosConfig("json")
  );
};
const getRolesWithPagnation = async (body: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/role/GetAllWithPagnation`,
    body,
    getAxiosConfig("json")
  );
};






export const useAddRole = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<any>, Error, any, string[]>({
    mutationFn: addRole,
    onSuccess: () => {
      toast(" با موفقیت اضافه شد", { style: toastColor("sucess") });
      queryClient.invalidateQueries({ queryKey: ['rolesWithPagnation'] })
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
export const useGetRoleWithPagnation = (body) => {
  return useQuery({
    queryKey: ["rolesWithPagnation"],
    queryFn: ()=>getRolesWithPagnation(body),

  });
};
