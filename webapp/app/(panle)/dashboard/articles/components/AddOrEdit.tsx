import { useAddArticle, useGetArticleWithUrl } from '@/app/(panle)/Services/article.service';
import FormCheckBox from '@/app/components/BaseFormItems/FormCheckBox/FormCheckBox';
import FormTextFiled from '@/app/components/BaseFormItems/FormTextFiled/FormTextFiled';
import ModalLayout from '@/app/components/Modal/ModalLayout'
import Uploader from '@/app/components/Uploader/Uploader';
import React, { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import TinyEditore from './TinyEditore';
import TextField from '@/app/components/BaseFormItems/FormTextFiled/TextField';
import SpLoading from '@/app/components/Loading/SpLoading';
import { useDebounce } from '@/app/hooks/useDebunce';

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
        control,
        reset,
        formState: { errors },
    } = useForm<IArticleForm>({
        defaultValues: {
            title: "",
            content: "",
            published: false
        }
    });
    const onSubmit: SubmitHandler<IArticleForm> = (data) => mutate({ ...data, content: editorRef.current.getContent(), thumbnail }, {
        onSuccess: () => {
            setOpen(false);
            reset();
        }
    })
    const [urlState, setUrlState] = useState("");
    const debounceRef = useRef(null);
    const debunceValue = useDebounce(urlState, 3000)
    const { data, isLoading, refetch, isError } = useGetArticleWithUrl(debunceValue)
    const debunceUrl = (e) => {
        const value = e.target.value
        setUrlState(value);



    }
    useEffect(() => {
        refetch()

    }, [debunceValue])

    return (
        <ModalLayout open={open} setOpen={setOpen} size="80%">
            <div className="flex flex-col md:flex-row gap-6 p-4">

                {/* left form */}
                <div className="w-full md:w-1/2 bg-white rounded-xl p-4 shadow-md ">
                    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>

                        <FormCheckBox
                            control={control}
                            label="انتشار"
                            name="published"
                        />

                        <FormTextFiled
                            type="text"
                            name="title"
                            placeholder="عنوان"
                            register={register}
                            error={errors.title}
                        />
                        <FormTextFiled
                            type="text"
                            name="summary"
                            placeholder="توضیحات کوتاه"
                            register={register}
                            error={errors.title}

                        />
                        <TinyEditore editorRef={editorRef} />

                        <Uploader setimagesUploaded={setThumbnail} />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="hover:cursor-pointer w-fit text-white bg-blue-600 hover:bg-blue-700 rounded-xl py-2 px-8 transition"
                            >
                                ثبت
                            </button>
                        </div>
                    </form>
                </div>

                {/* right article fetch */}
                <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-lg flex flex-col">
                    <h3 className="text-2xl font-bold mb-5 border-b pb-2">جستجوی مقاله</h3>

                    <TextField
                        ref={debounceRef}
                        inpValue={urlState}
                        onchangeInput={debunceUrl}
                        name="urlArticle"
                        placeholder="آدرس مقاله"
                        type="text"
                        classCu="w-full"
                    />

                    <div className="w-full mt-6 rounded-xl p-4 bg-gray-50 flex flex-col min-h-[400px]">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-full">
                                <SpLoading />
                            </div>
                        ) : isError ? (
                            <p className="text-center text-xl text-red-500 mt-10">مقاله‌ای یافت نشد</p>
                        ) : data ? (
                            <div className="w-full flex flex-col gap-4">
                                {/* عنوان مقاله */}
                                <h3 className="text-2xl font-semibold text-gray-800">{data.title}</h3>
                                {/* متن مقاله */}
                                <div className="overflow-y-auto max-h-[300px] pr-2 text-gray-700 leading-7 whitespace-pre-line border rounded-lg p-3 bg-white shadow-sm">
                                    {Array.isArray(data.content)
                                        ? data.content.join("\n\n")
                                        : data.content}
                                </div>

                                {/* بخش تصاویر */}
                                <h3 className="text-xl font-semibold mt-4 mb-2">تصاویر مقاله</h3>
                                {data.images?.length > 0 ? (
                                    <div className="flex flex-wrap gap-4 overflow-y-auto max-h-[250px]">
                                        {data.images.map((img, i) => (
                                            <div
                                                key={img + i}
                                                className="w-[250px] h-[150px] relative rounded-lg overflow-hidden shadow-sm"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`image-${i}`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400">تصویری یافت نشد</p>
                                )}
                            </div>
                        ) : (
                            <p className="text-gray-400 text-center mt-10">لطفا یک آدرس وارد کنید</p>
                        )}
                    </div>
                </div>

            </div>
        </ModalLayout>


    )
}
export default AddOrEdit 