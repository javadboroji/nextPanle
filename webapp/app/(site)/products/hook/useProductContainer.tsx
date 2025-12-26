""
import { useGetAllProductWithPagnation } from "@/app/(panle)/Services/product.service";
import useGridBody from "@/app/hooks/useGridBody";

const useProductContainer = () => {
    const { body } = useGridBody();
    const { data } = useGetAllProductWithPagnation(body);



    return{
        productList : data || [],
    }

}
export default useProductContainer