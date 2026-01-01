"use client"
import useAddToBasket from '@/app/store/basket'
import React, { useEffect } from 'react'
import { IProduct } from '../types'
type AddToBasketBtnProps = {
    product: IProduct
}
function AddToBasketBtn(props: AddToBasketBtnProps) {
    const { setProductBasket  } = useAddToBasket();

    const addToBasketHandler = () => {
        setProductBasket(props.product)
    }

    return (
        <button onClick={addToBasketHandler} className='rounded-full p-2 w-full bg-black text-white'>
            افزودن به سبد خرید
        </button>
    )
}

export default AddToBasketBtn