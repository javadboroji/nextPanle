import React from 'react'
import OrderSummury from './components/OrderSummary'
import OrderCartBasket from './components/OrderCartBasket'

function basketPage() {
    return (
        <div className='container mx-auto'>
            <div className='flex  '>
                <div className="lg:w-[60%] my-2">
                    <OrderCartBasket />
                </div>
                <div className="lg:w-[39%] my-2">
                    <OrderSummury />
                </div>
            </div>

        </div>
    )
}

export default basketPage