"use client"
import DataTable from '@/components/DataTable/DataTable'
import ModalLayout from '@/components/Modal/Modal'
import React, { useState } from 'react'
import Layout from './Layout'
import Uploader from '@/components/Uploader/Uploader'
import Loading from '@/components/Loading/Loading'
import { toast, Toaster } from "sonner"
function page() {
 const [images, setImages] = useState("")
  return (
    <Layout> 
      <button className='' onClick={()=>toast("success")}> click Toast</button>
      {/* <Loading/> */}
      
    </Layout>
  )
}

export default page