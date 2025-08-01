"use client";
import DataTable from "@/app/components/DataTable/DataTable";
import TableHeaderButtons from "@/app/components/TableCrudUi/TableHeaderButtons";
import React, { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
import { useGetAllUsers } from "@/app/(panle)/Services/User";
import useGridBody from "@/app/hooks/useGridBody";
import { Tag } from "antd";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import columnAction from "@/app/helper/columnnAction";
import { ColumnType } from "antd/es/table";
import { Iuser } from "../types";

function WrapUserPage() {
  dayjs.extend(jalaliday);




  const columns:ColumnType<Iuser> = [
    {
      title: "ایمیل",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "نام کاربری",
      dataIndex: "name",
      key: "username",
    },
    {
      title: "تاریخ عضویت",
      dataIndex: "createdAt",
      key: "createdAt",
      
      render: (date: string) => dayjs(date).calendar("jalali").format("YYYY/MM/DD"),
    },
    {
      title: "نقش",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "وضعیت",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => (
        <Tag color={status ? "green" : "red"}>
          {status ? "فعال" : "غیرفعال"}
        </Tag>
      ),
    },
    columnAction({ action: ["edit"] })
  ];

  const [open, setOpen] = useState(false);
  const { body, setBody } = useGridBody();
  const { data } = useGetAllUsers(body);
  const createNewuser = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (data && data.totalDatas !== body.total) {
      setBody("total", data.totalDatas);
    }

  }, [data])

  return (
    <>
      <DataTable
        columns={columns}
        data={data?.data ?? []}
        pagnation={true}
        headerCrudButton={<TableHeaderButtons lable="ایجاد کاربر جدید" addNewOnclick={createNewuser} />}
      />

      <AddNewUser open={open} setOpen={setOpen} />
    </>
  );
}

export default WrapUserPage;
