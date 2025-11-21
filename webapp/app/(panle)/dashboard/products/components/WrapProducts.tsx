"use client"
import DataTable from '@/app/components/DataTable/DataTable'
import TableHeaderButtons from '@/app/components/TableCrudUi/TableHeaderButtons'
import React, { useMemo, useState } from 'react'
import AddProduct from './AddProduct';
import { useGetAllProductWithPagnation } from '@/app/(panle)/Services/product.service';
import useGridBody from '@/app/hooks/useGridBody';
import columnAction from '@/app/helper/columnnAction';

function WrapProducts() {
    const [open, setOpen] = useState(false);

    const createNewProduct = () => {
        setOpen(true);
    };

    /* -------------------------------- //Column -------------------------------- */
    const editHandler = () => {
        console.log('edit Click');

    }
    const columns = useMemo(() => [
        {
            title: " نام محصول ",
            dataIndex: "productName",
            key: "productName",
        },
        {
            title: "قیمت  ",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "تعداد  ",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "برند  ",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "مدل  ",
            dataIndex: "model",
            key: "model",
        },
        {
            title: "بارکد  ",
            dataIndex: "barcode",
            key: "barcode",
        },
        {
            title: "دسته بندی  ",
            dataIndex: "categoryName",
            key: "categoryName",
        },
         {
            title: "  تگ ",
            dataIndex: "tagName",
            key: "tagName",
        },
        {
            title: "توضیحات  ",
            dataIndex: "description",
            key: "description",
        },

        {
            title: "تاریخ ",
            dataIndex: "date",
            key: "date",
        },
        columnAction({ action: ["edit"], callBackEdite: editHandler })
    ], [])

    /* ------------------------------- //Rows Data ------------------------------ */
    const { body } = useGridBody();

    const { data } = useGetAllProductWithPagnation(body);



    return (
        <>
            <DataTable
                columns={columns}
                data={data || []}
                pagnation={true}
                headerCrudButton={<TableHeaderButtons lable='ایجاد محصول جدید' addNewOnclick={createNewProduct} />}
            />
            <AddProduct open={open} setOpen={setOpen} />
        </>
    )
}

export default WrapProducts