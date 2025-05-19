"use client"
import DataTable from '@/components/DataTable/DataTable'
import ModalLayout from '@/components/Modal/Modal'
import React, { useState } from 'react'
import Layout from './Layout'
import Uploader from '@/components/Uploader/Uploader'
import Loading from '@/components/Loading/Loading'
import { toast, Toaster } from "sonner"
import Cbutton from '@/components/Button/Cbutton'
function page() {
 const [images, setImages] = useState("");
 const clickHandler=(data:any)=>{
  console.log(data ,'*********');
  
 }
  return (
    <Layout> 
      <button className='' onClick={()=>toast("success")}> click Toast</button>
      {/* <Loading/> */}
      <div className='flex items-center'>
      <Cbutton type='button'  btnType='fill' size='lg' onClick={()=>clickHandler({user:"dawdwad"})}> کلیک</Cbutton>
      <Cbutton type='button'  btnType='link'> کلیک</Cbutton>
      <Cbutton type='button'  btnType='outline'> کلیک</Cbutton>
      </div>
    </Layout>
  )
}

export default page