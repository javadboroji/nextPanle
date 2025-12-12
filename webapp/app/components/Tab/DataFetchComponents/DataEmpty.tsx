import React from 'react'
type DataEmptyProps = {
    description?: string
}
function DataEmpty(props: DataEmptyProps) {
    return (
        <div className='flex w-full items-center justify-center'>
            <p className='text-gray-400 text-xl'>   {props.description ? props.description : '  داده ای یافت نشد'}  </p>
        </div>
    )
  
}

export default DataEmpty