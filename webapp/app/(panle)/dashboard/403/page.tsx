import Image from 'next/image'
import React from 'react'
import image from "@/public/original-abeee5d09b1a85f4e023868f7e51cba1.webp"
function page() {
  return (
    <div className="flex justify-center">


      <Image
        src={image}
        alt='403'
      />
    </div>
  )
}

export default page