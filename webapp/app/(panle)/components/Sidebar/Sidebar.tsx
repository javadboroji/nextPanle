"use client"
import React, { Profiler, ReactNode, useCallback, useMemo, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { GrArticle } from "react-icons/gr";
import { IoIosLock } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { getAuthClient } from '@/lib/auth';
import SidebarItem from './components/SidebarItem';
import { useRole } from '../../context/RoleContext';
export interface menuType {
  id: string;
  name: string;
  link: string;
  icon?: ReactNode;
  nested?: boolean;
  child?: menuType[];
  auth: boolean
};

type menusType = menuType[];
function Sidebar() {
  const [submenu, setSubmenu] = useState<string[]>([]);

  const { role } = useRole();
  const toggleNestedMenu = useCallback(
    (id: string) => {
      setSubmenu(prev =>
        prev.includes(id)
          ? prev.filter(menu => menu !== id)
          : [...prev, id]
      );
    },
    [],
  )
  console.log(role);
  
  const dashBoardItems: menusType = useMemo(() => [
    {
      id: "1",
      name: "وب سایت",
      link: "/",
      icon: <CgWebsite size={24} color='#667085' />,
      nested: false,
      auth: true
    },

    {
      id: "11",
      name: "داشبورد",
      link: "dashboard",
      icon: <MdDashboard size={24} color='#667085' />,
      nested: false,
      auth: role?.includes("admin")
    },
    {
      id: "47",
      name: "مقالات  ",
      link: "/dashboard/articles",
      icon: <CgWebsite size={24} color='#667085' />,
      nested: false,
      auth: role?.some(r => ["admin", "writer"].includes(r))
    },
    {
      id: "123",
      name: "کارها",
      link: "/dashboard/tasks",
      icon: <MdDashboard size={24} color='#667085' />,
      nested: false,
      auth: role?.includes("admin")
    },
    {
      id: "2",
      name: "مدیریت کاربران ",
      link: "/dashboard/users",
      icon: <FaUsers size={24} color='#667085' />,
      nested: false,
      auth: role?.includes("admin")
    },
    {
      id: "3",
      name: "مدیریت نقش ها ",
      link: "/dashboard/roles",
      icon: <IoIosLock size={24} color='#667085' />,
      nested: false,
      auth: role?.includes("admin")
    },
    {
      id: "4",
      name: "مدیریت دسته بندی ها ",
      link: "/dashboard/category",
      icon: <MdDashboard size={24} color='#667085' />,
      nested: false,
      auth: role?.some(r => ["admin", "writer", "user"].includes(r))
    },
    {
      id: "6",
      name: "مدیریت مطالب",
      link: "/dashboard/blogs",
      icon: <GrArticle size={24} color='#667085' />,
      nested: false,
      auth: role?.some(r => ["admin", "writer", "user"].includes(r))

    },
    {
      id: "5",
      name: "اطلاعات پایه ",
      link: "",
      icon: <IoIosSettings size={24} color='#667085' />,
      nested: true,
      auth: role?.some(r => ["admin"].includes(r)),

      child: [{
        id: "5-1",
        name: "تنظیمات",
        link: "/dashboard/setting",
        icon: <IoIosSettings size={24} color='#667085' />,
        nested: true,
        auth: role?.some(r => ["admin"].includes(r)),
      }]
    },
    {
      id: "7",
      name: " محصولات  ",
      link: "",
      icon: <MdOutlineProductionQuantityLimits size={24} color='#667085' />,
      nested: true,
      auth: role?.some(r => ["admin"].includes(r)),
      child: [{
        id: "7-1",
        name: "لیست محصولات ",
        link: "/dashboard/products",
        icon: <BsCardChecklist size={24} />,
        nested: true,
        auth: role?.some(r => ["admin"].includes(r)),

      }]
    },



  ], [role])



  return (

    <aside className=" border-l-[1px] border-gray-100 min-h-[100dvh]  my-2  transition-all duration-300 ease-in-out shadow-xl dark:border-gray-700">
      <div className="flex flex-col">
        <h1 className=" text-xl font-bold my-4 px-2 m-auto">پنل مدیریت</h1>
        <nav className="flex flex-col gap-1">
          {dashBoardItems.map((menu) => (
            <SidebarItem menu={menu} key={menu.id} submenu={submenu} toggleNestedMenu={toggleNestedMenu} />
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default React.memo(Sidebar)