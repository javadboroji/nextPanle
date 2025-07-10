import { IProduct } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export type TProductInputs = Omit<IProduct, "id"|"image_url">
const useAddProductConatiner = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TProductInputs>();

    const onSubmit: SubmitHandler<TProductInputs> = (data) => console.log(data);

    return {
        values: {
            errors
        },
        action: {
            onSubmit, handleSubmit, control, register
        }
    }
}
export default useAddProductConatiner