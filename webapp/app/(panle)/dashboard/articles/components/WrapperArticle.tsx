'use client'
import DataTable from '@/app/components/DataTable/DataTable'
import React from 'react'
import useArticleContainer from '../hook/useArticleContainer'
import TableHeaderButtons from '@/app/components/TableCrudUi/TableHeaderButtons'
import AddOrEdit from './AddOrEdit'

function WrapperArticle() {
    const { values, action } = useArticleContainer()
    return (
        <div>
            <DataTable
                columns={values.columns}
                data={values.data?? []}
                pagnation={true}
                headerCrudButton={<TableHeaderButtons  lable="اضافه کردن  مقاله جدید" addNewOnclick={action.modalHandler} />}
            />
            <AddOrEdit open={values.showModal} setOpen={action.setShowModal}/>
        </div>
    )
}

export default WrapperArticle