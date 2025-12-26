import React from 'react'
import ProductList from './components/ProductList'

async function ProductsPage() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-4'>محصولات </h1>
            <ProductList />
        </div>
    )
}

export default ProductsPage