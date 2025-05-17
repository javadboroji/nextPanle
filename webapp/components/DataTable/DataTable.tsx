"use client"
import React from 'react'
import { Table, TableProps } from 'antd';
import useGridBody from '@/hooks/useGridBody';

type DataTableProps<T>=TableProps<T>& {
    data:  T[];
    columns: TableProps<T>['columns'];
    modal?: boolean;
    modaltitle?: string;
    rowSelect?: any;
    setRowSelect?: React.Dispatch<React.SetStateAction<any>>;
}
function DataTable <T extends object> ({
    data,
    columns,
    setRowSelect}:DataTableProps<T>) {
//pagnation
 const{body ,setBody}= useGridBody()

  return (
    <div>
     <Table<T>
        columns={columns}
        dataSource={data ||[]}
        onRow={setRowSelect ?     (record, index) => {
            return { onClick: (event) => setRowSelect(record) };
          }:()=>{return{}}}
        pagination={{
          defaultCurrent: body.page,
          defaultPageSize: body.pageSize,
          total: body?.total,
          onChange(page) {
            setBody("page", page);
          },
        }}
      />
    </div>
  )
}

export default DataTable