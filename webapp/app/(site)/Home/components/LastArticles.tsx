import { ArticlesDetai } from '@/app/page'
import { fnFetchSsr, IetchProps } from '@/lib/fnFetchSsr'
import Image from 'next/image'
import React from 'react'
import { FiUser } from "react-icons/fi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

interface LastArticlesProps {
    detail: ArticlesDetai
}
function LastArticles({ detail }: LastArticlesProps) {
    // const payload: IetchProps = {
    //     url: `${process.env.BASE_URL}/articles/getAll`,
    //     method: "GET",

    // }
    // const lastArticleData =await fnFetchSsr(payload)

    // console.log(lastArticleData ,'lastArticleDatalastArticleDa');

    return (

        <div className='flex  flex-col w-full h-full shadow-2xl p-4 rounded-2xl'>
            <div className='flex justify-between p-2'>
                <span className='flex items-center text-xs p-1 text-gray-400'>
                    <FiUser size={20} className='ml-1' />
                    {detail.userName}</span>
                <span className='flex items-center  text-xs p-1 text-gray-400'><HiOutlineCalendarDateRange size={20} className='ml-1' /> {detail.date}</span></div>
            <div className='relative w-full  h-[20rem] overflow-hidden'>
                <Image src={`${process.env.BASE_URL}/${detail.thumbnail}`} alt={detail.title} fill   className="object-cover"/>
            </div>
            <h2 className='font-bold text-center p-2 truncate my-2'>{detail.title}</h2>
        </div>


    )
}

export default LastArticles
