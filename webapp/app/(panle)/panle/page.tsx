"use client"
import DataTable from '@/components/DataTable/DataTable'
import ModalLayout from '@/components/Modal/Modal'
import React, { useState } from 'react'
import Layout from './Layout'
import Uploader from '@/components/Uploader/Uploader'
import Loading from '@/components/Loading/Loading'

function page() {
 const [images, setImages] = useState("")
  return (
    <Layout> 
      <Loading/>
    </Layout>
  )
}

export default page