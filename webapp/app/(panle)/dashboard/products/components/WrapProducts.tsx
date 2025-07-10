"use client"
import DataTable from '@/app/components/DataTable/DataTable'
import TableHeaderButtons from '@/app/components/TableCrudUi/TableHeaderButtons'
import React, { useState } from 'react'
import AddProduct from './AddProduct';

function WrapProducts() {
    const [open, setOpen] = useState(false);

    const createNewProduct = () => {
        setOpen(true);
    };
    return (
        <>
            <DataTable
                columns={[]}
                data={[]}
                pagnation={true}
                headerCrudButton={<TableHeaderButtons lable='ایجاد محصول جدید' addNewOnclick={createNewProduct} />}
            />
            <AddProduct open={open} setOpen={setOpen} />
        </>
    )
}

export default WrapProducts