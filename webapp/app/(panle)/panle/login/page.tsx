import React from 'react'
import image from "@/public/grid-01.svg"
import Image from 'next/image'
function page() {
  return (
    <div className='flex   h-[100dvh]'>
        <div className='w-full lg:w-1/2  p-2 lg:p-4 flex justify-center items-center '>
            <div className='flex flex-col justify-center w-10/12  '>
                <h2 className='text-2xl'> ورود </h2>
                <span className='text-xs'> برای ورود ایمیل  وپسورد خود را وارد کنید!</span>
                {/*  Form */}
                <button className='hover:cursor-pointer w-full text-white bg-blue-500 rounde-[8px] p-2 my-4'> ورود</button>
            </div>
        </div>
        <div className='hidden lg:flex w-1/2 h-full bg-[#161950] relative  justify-center items-center'>
        <h1 className='text-white text-6xl'>   پنل ادمین </h1>
          <div className='absolute to-0 right-0 w-1/3 h-1/3  z-0'>
            <Image src={image} alt="pattern" fill className='object-center  object-cover '/>
          </div>
          <div className='absolute bottom-0 left-0 w-1/3 h-1/3 z-0'>
            <Image src={image} alt="pattern" fill className='object-center  object-cover'/>
          </div>
        </div>
    </div>
  )
}

export default page