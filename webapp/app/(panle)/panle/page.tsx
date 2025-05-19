"use client"
import DataTable from '@/components/DataTable/DataTable'
import ModalLayout from '@/components/Modal/Modal'
import React, { useState } from 'react'
import Layout from './Layout'
import Uploader from '@/components/Uploader/Uploader'
import Loading from '@/components/Loading/Loading'
import { toast, Toaster } from "sonner"
import Cbutton from '@/components/Button/Cbutton'
import SheetC from '@/components/Sheet/SheetC'
import { SheetTrigger } from '@/components/ui/sheet'
function page() {
  const [open, setOPen] = useState(false)
 const clickHandler=(data:any)=>{
  setOPen(true)
  
 }
  return (
    <Layout> 
      <button className='' onClick={()=>toast("success")}> click Toast</button>
      {/* <Loading/> */}
      <div className='flex items-center'>
      <Cbutton btnType='fill' onClick={()=>setOPen(true)}> Open</Cbutton>
        
      <SheetC open={open} setopen={setOPen}> 

        <p> Testing </p>
      </SheetC>
      </div>
    </Layout>
  )
}

export default page