import { useAddArticle } from '@/app/(panle)/Services/article.service';
import FormCheckBox from '@/app/components/BaseFormItems/FormCheckBox/FormCheckBox';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
import ModalLayout from '@/app/components/Modal/ModalLayout'
import Uploader from '@/app/components/Uploader/Uploader';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface AddOrEditProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IArticleForm {
    title: string,
    content: string,
    published: boolean
}
const AddOrEdit: React.FC<AddOrEditProps> = ({ open, setOpen }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const{mutate}= useAddArticle()
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<IArticleForm>();
    const onSubmit: SubmitHandler<IArticleForm> = (data) => mutate({...data ,thumbnail})


    useEffect(() => {
     console.log(thumbnail);
     
    }, [thumbnail])
    
    return (
        <ModalLayout open={open} setOpen={setOpen}>


            <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap items-center">
                    <div className='w-1/2 px-1'>
                        <FormCheckBox
                            control={control}
                            label='انتشار'
                            name='published'
                        />
                    </div>
                    <div className="w-full px-1">
                        <FormTextFiled
                            type="text"
                            name="title"
                            placeholder=" عنوان "
                            register={register}
                            error={errors.title}
                        />
                    </div>
                    <div className="w-full px-1">
                        <FormTextFiled
                            type="text"
                            name="content"
                            placeholder=" متن "
                            register={register}
                            error={errors.content}
                        />
                    </div>
                    <div className='w-full'>
                        <Uploader setimagesUploaded={setThumbnail} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="hover:cursor-pointer w-fit text-white bg-blue-500 block rounded-2xl py-2 px-8 my-4"
                    >
                        {" "}
                        ثبت
                    </button>
                </div>
            </form>

        </ModalLayout>

    )
}
export default AddOrEdit 