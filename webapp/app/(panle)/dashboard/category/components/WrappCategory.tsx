"use client"
import DataTable from '@/app/components/DataTable/DataTable'
import TableHeaderButtons from '@/app/components/TableCrudUi/TableHeaderButtons'
import React from 'react'
import AddOrEdit from './AddOrEdit'
import useCategoryContainer from './useCategoryContainer';

function WrappCategory() {
    const { actions, dataValue } = useCategoryContainer();
    const { columns, tableData, open } = dataValue;
    const { showModal, setOpen } = actions;
    return (
        <div>
            <DataTable
                columns={columns}
                data={tableData}
                pagnation={true}
                headerCrudButton={<TableHeaderButtons lable="اضافه کردن دسته بندی جدید" addNewOnclick={showModal} />}
            />
            <AddOrEdit open={open} setOpen={setOpen} />
        </div>
    )
}

export default WrappCategory