import { fnFetchSsr, IetchProps } from '@/lib/fnFetchSsr';
import React from 'react'
import { IProduct } from '../types';
import ProductInfo from '../components/ProductInfo';
import ColectionImage from '../components/ColectionImage';

async function ProductDetailPage({ params }) {
    const { id } = await params;
    const payload: IetchProps = {
        url: `${process.env.BASE_URL}/product/GetProduct/${id}`,
        method: 'GET',

    };
    const product = await fnFetchSsr<{ status: string, message: string, data: IProduct, error: boolean }>(payload);


    console.log(id, '#page=>productDetail');

    return (
        <div className='container mx-auto p-4 flex flex-wrap '>
            <div className='xl:w-1/2 w-full shadow-xl p-2 rounded-2xl order-2 xl:order-1'>
                <ColectionImage data={product.data.images} />
            </div>
            <div className='xl:w-1/2 w-full p-4  order-1 xl:order-2'>
                <ProductInfo data={product.data} />
            </div>

        </div>
    )
}

export default ProductDetailPage