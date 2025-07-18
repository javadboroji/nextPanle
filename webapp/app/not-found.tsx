import Image from 'next/image'
import React from 'react'
import image from "@/public/404.svg"
import Link from 'next/link'
function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center '> 
      <h1 className='text-4xl p-8'>  خطا !</h1>
       <Image className='p-8' src={image} alt='error' />

       <Link href={"/"} className='text-2xl rounded-2xl my-4  text-blue-700 border-[1px] border-blue-700 py-4 px-8'> برگشت</Link> 
    </div>
  )
}

export default NotFound