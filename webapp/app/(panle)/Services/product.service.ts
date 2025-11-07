import { getAxiosConfig } from "@/Services";
import instance from "@/Services/instercepter";
import { useQuery } from "@tanstack/react-query";



const getAllCategoryProduct = async () => { 
    return await instance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-category/GetAll`,
        getAxiosConfig("json")
    );
};

const getAllTagProduct = async () => {
    return await instance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/product-tag/GetAll`,
        getAxiosConfig("json")
    );
};

export const useGetAllProductCategories = () => {
    return useQuery({
        queryKey: ["GetAllProductCategories"],
        queryFn: () => getAllCategoryProduct(),
        select: (data) => {
            return data?.data?.data
        }
    });
}
export const useGetAllProductTags = () => {
    return useQuery({
        queryKey: ["ProductTags "],
        queryFn: () => getAllTagProduct(),
        select: (data) => {
            return data?.data?.data
        }
    });
}