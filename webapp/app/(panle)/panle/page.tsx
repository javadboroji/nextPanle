"use client"
import DataTable from '@/components/DataTable/DataTable'
import ModalLayout from '@/components/Modal/Modal'
import React, { useState } from 'react'

function page() {
 const data=[{ key: '1', name: 'Ali', age: 25 } ,{ key: '2', name: 'Ali', age: 25 },{ key: '13', name: 'Ali', age: 25 },{ key: '4', name: 'Ali', age: 25 }]
  const columns=[
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    
  ];
  const [open, setOpen] = useState(false)
  return (
    <div> 
      <DataTable  columns={columns} data={data} />
      <button onClick={()=>setOpen(true)}>Open</button>
      <ModalLayout open={open} setOpen={setOpen}> <p> Test</p></ModalLayout>
    </div>
  )
}

export default page