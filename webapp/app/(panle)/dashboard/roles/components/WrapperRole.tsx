"use client";
import React, { useEffect, useState } from "react";
import AddOrEdit from "./AddOrEdit";
import DataTable from "@/app/components/DataTable/DataTable";
import TableHeaderButtons from "@/app/components/TableCrudUi/TableHeaderButtons";
import useRoleContainer from "./useRoleContainer";

function WrapperRole() {
  const { actions, dataValue } = useRoleContainer();
  const { columns, tableData, open } = dataValue;
  const { showModal, setOpen } = actions;

  return (
    <div>
      <DataTable
        columns={columns}
        data={tableData}
        pagnation={true}
        headerCrudButton={<TableHeaderButtons addNewOnclick={showModal} />}
      />
      <AddOrEdit open={open} setOpen={setOpen} />
    </div>
  );
}

export default WrapperRole;
