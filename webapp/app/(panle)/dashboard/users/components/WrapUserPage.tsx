"use client";
import DataTable from "@/app/components/DataTable/DataTable";
import TableHeaderButtons from "@/app/components/TableCrudUi/TableHeaderButtons";
import React, { useState } from "react";
import AddNewUser from "./AddNewUser";

function WrapUserPage() {
  const columns = [
    {
      title: "نام",
      dataIndex: "fristName",
      key: "fristName",
    },
    {
      title: "نام خانوادگی",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "ایمیل",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "نام کاربری",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "تاریخ عضویت",
      dataIndex: "dateRegister",
      key: "dateRegister",
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
    },
  ];
  const data = [
    {
      key: "1",
      fristName: "علی",
      lastname: "کاظمی",
      email: "ali.kazemi@example.com",
      username: "alikz",
      dateRegister: "1402/01/15",
      role: "ادمین",
      status: "فعال",
    },
    {
      key: "2",
      fristName: "مریم",
      lastname: "رضایی",
      email: "maryam.rz@example.com",
      username: "maryamr",
      dateRegister: "1402/02/10",
      role: "کاربر",
      status: "غیرفعال",
    },
    {
      key: "3",
      fristName: "حسین",
      lastname: "کریمی",
      email: "hossein.k@example.com",
      username: "hosseink",
      dateRegister: "1402/03/20",
      role: "ادمین",
      status: "فعال",
    },
    {
      key: "4",
      fristName: "فاطمه",
      lastname: "احمدی",
      email: "fatemeh.a@example.com",
      username: "fatemeha",
      dateRegister: "1402/04/05",
      role: "کاربر",
      status: "فعال",
    },
    {
      key: "5",
      fristName: "رضا",
      lastname: "نوری",
      email: "reza.n@example.com",
      username: "rezan",
      dateRegister: "1402/04/18",
      role: "نویسنده",
      status: "غیرفعال",
    },
    {
      key: "6",
      fristName: "نگار",
      lastname: "شریفی",
      email: "negar.sh@example.com",
      username: "negarsh",
      dateRegister: "1402/05/01",
      role: "کاربر",
      status: "فعال",
    },
    {
      key: "7",
      fristName: "سجاد",
      lastname: "یوسفی",
      email: "sajad.y@example.com",
      username: "sajady",
      dateRegister: "1402/05/12",
      role: "نویسنده",
      status: "فعال",
    },
    {
      key: "8",
      fristName: "مهسا",
      lastname: "کریمی",
      email: "mahsa.k@example.com",
      username: "mahsak",
      dateRegister: "1402/06/03",
      role: "کاربر",
      status: "غیرفعال",
    },
    {
      key: "9",
      fristName: "کیان",
      lastname: "رستمی",
      email: "kian.r@example.com",
      username: "kianr",
      dateRegister: "1402/06/17",
      role: "ادمین",
      status: "فعال",
    },
    {
      key: "10",
      fristName: "ستاره",
      lastname: "حسینی",
      email: "setareh.h@example.com",
      username: "setarehh",
      dateRegister: "1402/07/01",
      role: "کاربر",
      status: "فعال",
    },
  ];

  const [open, setOpen] = useState(false);
  const createNewuser = () => {
    setOpen(true);
  };
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pagnation={true}
        headerCrudButton={<TableHeaderButtons addNewOnclick={createNewuser} />}
      />

      <AddNewUser open={open} setOpen={setOpen} />
    </>
  );
}

export default WrapUserPage;
