"use client";
import React, { useState } from "react";
import Image from "next/image";
interface IColectionImage {
    data: string[];
}
const ColectionImage: React.FC<IColectionImage> = ({ data }) => {
    const [imagePreview, setImagePreview] = useState<undefined | string>(
        data?.length > 0 ? data[0] : undefined
    );
    const imagePrevView = (image: string) => {
        const imageSelected = data?.find((img) => img === image);
        setImagePreview(imageSelected);
    };
    return (
        <div className="flex flex-col lg:flex-row p-4">
            <div className="xl:w-[20%] xl:w-[25%] max-h-[40rem] overflow-y-auto flex lg:flex-col order-2 lg:order-1">
                {data?.map((image, i) => {
                    return (
                        <button
                            key={`image-${i}}`}
                            className="my-2 w-18 h-10 mx-1 lg:w-38 lg:h-32 bg-ec-gray rounded-lg p-1"
                            onClick={() => imagePrevView(image)}
                        >
                            <div className='relative w-full  h-[8rem] overflow-hidden rounded-3xl'>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`}
                                    alt={'image'}
                                    fill
                                    className="object-fill"
                                />
                            </div>

                        </button>
                    );
                })}
            </div>
            <div className="flex flex-1 m-4 bg-ec-gray order-1 lg:order-2 max-h-[25rem]">
                {imagePreview && (
                    <div className='relative w-full  h-[35rem] overflow-hidden rounded-3xl'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${imagePreview}`}
                            alt={'image'}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColectionImage;
