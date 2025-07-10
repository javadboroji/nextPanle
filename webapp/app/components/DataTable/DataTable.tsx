"use client";
import React from "react";
import { ConfigProvider, Table, TableProps } from "antd";
import useGridBody from "@/app/hooks/useGridBody";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AntProviderLayout from "../AntProviderLayout";
import SearchDataTable from "./SearchDataTable";

type DataTableProps<T> = TableProps<T> & {
  data: T[];
  columns: TableProps<T>["columns"];
  modal?: boolean;
  modaltitle?: string;
  rowSelect?: any;
  pagnation: boolean;
  setRowSelect?: React.Dispatch<React.SetStateAction<any>>;
  headerCrudButton?:React.ReactNode
};
function DataTable<T extends object>({
  data,
  columns,
  setRowSelect,
  pagnation,
  headerCrudButton
}: DataTableProps<T>) {
  /*================================ Pagnation ==============================*/
  const { body, setBody } = useGridBody();
  const columnWithRowCount =columns? [
    {
      title: "ردیف",
      dataIndex: "index",
      key: "index",
      render: ( text: any, record: any, index: number) => index + 1,
    },
    ...columns,
  ]:[];
  return (
    <AntProviderLayout>
      <div className="flex flex-col">
        <div className="flex justify-between">
        <SearchDataTable   />
        {headerCrudButton&&headerCrudButton}
        </div>
        <Table<T>
          className=" dark:table-dark"
          columns={columnWithRowCount}
          dataSource={data || []}
          rowClassName={() => "custom-row"}
          onRow={
            setRowSelect
              ? (record, index) => {
                  return { onClick: (event) => setRowSelect(record) };
                }
              : undefined
          }
          pagination={
            pagnation
              ? {
                  defaultCurrent: body.page,
                  defaultPageSize: body.pageSize,
                  total: body?.total,
                  showSizeChanger: true,
                  sizeChangerRender: () => null,
                  pageSizeOptions: ["10", "20", "50", "100"],
                  itemRender: itemRender,
                  onChange(page, newPageSize) {
                    setBody("page", page);
                    if (newPageSize !== body.pageSize) {
                      setBody("pageSize", newPageSize);
                      setBody("page", 1);
                    }
                  },
                }
              : false
          }
        />
      </div>
    </AntProviderLayout>
  );
}

export default DataTable;

const itemRender = (page: number, type: string, originalElement: any) => {
  if (type === "prev") {
    return (
      <a>
        {" "}
        <RightOutlined />
      </a>
    );
  }
  if (type === "next") {
    return (
      <a>
        <LeftOutlined />
      </a>
    );
  }
  return originalElement;
};
