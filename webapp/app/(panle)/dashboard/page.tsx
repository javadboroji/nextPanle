import React from 'react'
import Layout from './Layout'
import DataTable from '@/app/components/DataTable/DataTable'

function page() {
    const data=[
        { key: '1', name: 'Ali', age: 25 } ,
        { key: '2', name: 'Ali', age: 25 },
        { key: '13', name: 'Ali', age: 25 },
        { key: '4', name: 'Ali', age: 25 },
        { key: '14', name: 'Ali', age: 25 } ,
        { key: '7714', name: 'Ali', age: 25 },
        { key: '7417', name: 'Ali', age: 25 },
        { key: '474', name: 'Ali', age: 25 },
        { key: 'da', name: 'Ali', age: 25 } ,
        { key: 'g', name: 'Ali', age: 25 },
        { key: 'f', name: 'Ali', age: 25 },
        { key: 'fsa', name: 'Ali', age: 25 },
        { key: 'sxd', name: 'Ali', age: 25 } ,
        { key: 'sf', name: 'Ali', age: 25 },
        { key: 'efs', name: 'Ali', age: 25 },
        { key: 'sfs', name: 'Ali', age: 25 }
    ]
    const columns=[
      { title: 'Name', dataIndex: 'name' },
      { title: 'Age', dataIndex: 'age' },
      
    ]
  return (
    <Layout>

        <DataTable columns={columns} data={data} pagnation={true}/>
    </Layout>
  )
}

export default page