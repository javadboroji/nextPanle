import Image from 'next/image'
import React from 'react'
import { IProduct } from '../types'
import { Button } from 'antd'
import Link from 'next/link'

type ProductCardProps = {
  product: IProduct
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='w-full bg-white rounded-3xl shadow-2xl p-3'>
      <Link href={`products/${product.id}`}>
        <div className='relative w-full  h-[15rem] overflow-hidden rounded-3xl'>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.thumbnail}`} alt={product.productName} fill className="object-cover" />
        </div>
      </Link>
      <div className='flex items-center justify-between py-2'>
        <span className='bg-green-100 rounded-full p-2 text-green-400 text-xs'> {product.model}</span>
      </div>
      <div className='flex items-center py-2'>
        <Link href={`products/${product.id}`}><span className=' text-lg font-bold'> {product.productName}</span></Link>
      </div>
      <div className='flex items-center py-2'>
        <span className=' text-lg '> قیمت  : {product.price}   تومان </span>
      </div>
      <button className='rounded-full p-2 w-full bg-black text-white'>
        افزودن به سبد خرید
      </button>
    </div>
  )
}

export default ProductCard