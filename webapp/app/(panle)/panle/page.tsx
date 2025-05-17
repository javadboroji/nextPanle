import DataTable from '@/components/DataTable/DataTable'
import React from 'react'

function page() {
 const data=[{ key: '1', name: 'Ali', age: 25 } ,{ key: '2', name: 'Ali', age: 25 },{ key: '13', name: 'Ali', age: 25 },{ key: '4', name: 'Ali', age: 25 }]
  const columns=[
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    
  ]
  return (
    <div> 
      <DataTable  columns={columns} data={data} />
    </div>
  )
}

export default page