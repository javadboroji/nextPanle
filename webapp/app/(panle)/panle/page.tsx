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
import { ITabComponent, ITabContent, ItabsTrigger } from '@/components/Tab/type'
import TabComponent from '@/components/Tab/TabComponent'
function page() {
    const tabsTrigger:ItabsTrigger[]=[
      {
        label:"Account",
        value:"account"
      },
      {
        label:"Transaction",
        value:"transaction"
      },
      {
        label:"Setting",
        value:"setting"
      }
    ]
    const tabsContent:ITabContent[]=[{
      value:"account",
      children:<div>
        <h1>Account</h1>
      </div>

    },
    {
      value:"transaction",
      children:<div>
        <h1>Transaction</h1>
      </div>
    },
    {
      value:"setting",
      children:<div>
        <h1>Setting</h1>
      </div>
    }
  ]
  return (
    <Layout> 
      <button className='' onClick={()=>toast("success")}> click Toast</button>
      {/* <Loading/> */}
      <div className='flex items-center'>
        <TabComponent tabsTrigger={tabsTrigger} tabContent={tabsContent}/>
      </div>
    </Layout>
  )
}

export default page