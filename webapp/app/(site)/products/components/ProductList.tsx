'use client'
import React from 'react'
import useProductContainer from '../hook/useProductContainer'
import ProductCard from './ProductCard';
import { IProduct } from '../types';


function ProductList() {
    const{productList} = useProductContainer() ;

 
    
  return (
    <div className='flex items-center flex-wrap'>
        {productList.length >0 &&productList.map((product :IProduct)=>{
            return (
              <div className='xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-3 '  key={product.id}> <ProductCard product={product}/> </div>  
            )
        })}
    </div>
  )
  
}

export default ProductList