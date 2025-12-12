import React from 'react'
type FetchErrorProps = {
    description?: string
}
function FetchError(props: FetchErrorProps) {
    return (
        <div className='flex w-full'>
            <p className='text-red-400'>   {props.description ? props.description : ' متاسفانه خطایی رخ داده است !'}  </p>
        </div>
    )
}

export default FetchError