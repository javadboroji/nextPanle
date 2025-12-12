import DataFetchLayout from '@/app/components/Tab/DataFetchComponents/DataFetchLayout';
import { ArticlesDetai } from '@/app/page';
import { fnFetchSsr, IetchProps } from '@/lib/fnFetchSsr';
import Image from 'next/image';
import React from 'react'
type articleSingleData = ArticlesDetai & {
    content: string
}
async function articlePage({ params }) {

    const { id } = await params
    const payload: IetchProps = {
        url: `${process.env.BASE_URL}/articles/article?id=${id}`,
        method: 'GET',

    };
    const articleData = await fnFetchSsr<{ status: string, message: string, data: ArticlesDetai, error: boolean }>(payload);

    return (
        <DataFetchLayout data={articleData} error={articleData?.error ? true : false} >
            <div className='container mx-auto flex flex-wrap flex-col'>
                <div className='flex flex-col  items-center gap-2'>
                    <h1 className='text-3xl'> {articleData.data.title}</h1>

                    <div className='relative w-1/2  h-[50rem] overflow-hidden'>
                        <Image src={`${process.env.BASE_URL}/${articleData.data.thumbnail}`} alt={articleData.data.title} fill className="object-cover" />
                    </div>
                    <div
                        className="article-content py-2 text-justify  leading-14 text-xl"
                        dangerouslySetInnerHTML={{ __html: articleData.data.content }}
                    />
                </div>
            </div>
        </DataFetchLayout>
    )
}

export default articlePage