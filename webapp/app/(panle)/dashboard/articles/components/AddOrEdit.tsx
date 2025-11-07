import { useAddArticle } from '@/app/(panle)/Services/article.service';
import FormCheckBox from '@/app/components/BaseFormItems/FormCheckBox/FormCheckBox';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
import ModalLayout from '@/app/components/Modal/ModalLayout'
import Uploader from '@/app/components/Uploader/Uploader';
import React, { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import TinyEditore from './TinyEditore';

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
    const editorRef = useRef(null);
    const [thumbnail, setThumbnail] = useState(null);
    const { mutate } = useAddArticle()
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<IArticleForm>({
        defaultValues: {
            title: "",
            content: "",
            published: false
        }
    });
    const onSubmit: SubmitHandler<IArticleForm> = (data) => mutate({ ...data, content: editorRef.current.getContent(), thumbnail })




    return (
        <ModalLayout open={open} setOpen={setOpen} size='80%'>


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

                        <TinyEditore editorRef={editorRef} />
                    </div>
                    <div className='w-full my-2'>
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