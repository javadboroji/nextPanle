import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const addRole = async (role: any) => {
  return await instance.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    role,
    getAxiosConfig("json")
  );
};

const getRoles = async () => {
  return await instance.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/roles/login`,
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
    onSuccess: (data) => {
      return data.data;
    },
    onError: (error) => {
      console.log(error);
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
