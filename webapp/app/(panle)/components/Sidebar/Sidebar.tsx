"use client"
import React, { ReactNode, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { GrArticle } from "react-icons/gr";
import { IoIosLock } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAuthClient } from '@/lib/auth';
type menu = {
  id: string;
  name: string;
  link: string;
  icon?: ReactNode;
  nested?: boolean;
  child?: menu[];
  auth: boolean
};

type menusType = menu[];
function Sidebar() {
  const location = usePathname();
  const [submenu, setSubmenu] = useState<string[]>([]);
  const role = getAuthClient();

  const dashBoardItems: menusType = [
    {
      id: "1",
      name: "وب سایت",
      link: "/",
      icon: <CgWebsite size={20} />,
      nested: false,
      auth: true
    },
    {
      id: "11",
      name: "داشبورد",
      link: "dashboard",
      icon: <MdDashboard size={20} />,
      nested: false,
      auth: role.includes("admin")
    },
    {
      id:"123",
      name: "کارها",
      link: "/dashboard/tasks",
      icon: <MdDashboard size={20} />,
      nested: false,
      auth: role.includes("admin")
    },
    {
      id: "2",
      name: "مدیریت کاربران ",
      link: "/dashboard/users",
      icon: <FaUsers size={20} />,
      nested: false,
      auth: role.includes("admin")
    },
    {
      id: "3",
      name: "مدیریت نقش ها ",
      link: "/dashboard/roles",
      icon: <IoIosLock size={20} />,
      nested: false,
      auth: role.includes("admin")
    },
    {
      id: "4",
      name: "مدیریت دسته بندی ها ",
      link: "/dashboard/category",
      icon: <MdDashboard size={20} />,
      nested: false,
      auth: role.some(r => ["admin", "writer", "user"].includes(r))
    },
    {
      id: "6",
      name: "مدیریت مطالب",
      link: "/dashboard/blogs",
      icon: <GrArticle size={20} />,
      nested: false,
      auth: role.some(r => ["admin", "writer", "user"].includes(r))

    },
    {
      id: "5",
      name: "اطلاعات پایه ",
      link: "",
      icon: <IoIosSettings size={20} />,
      nested: true,
      auth: role.some(r => ["admin"].includes(r)),

      child: [{
        id: "5-1",
        name: "تنظیمات",
        link: "/dashboard/setting",
        icon: <IoIosSettings size={20} />,
        nested: true,
        auth: role.some(r => ["admin"].includes(r)),
      }]
    },
    {
      id: "7",
      name: " محصولات  ",
      link: "",
      icon: <MdOutlineProductionQuantityLimits size={20} />,
      nested: true,
      auth: role.some(r => ["admin"].includes(r)),
      child: [{
        id: "7-1",
        name: "لیست محصولات ",
        link: "/dashboard/products",
        icon: <BsCardChecklist size={20} />,
        nested: true,
        auth: role.some(r => ["admin"].includes(r)),

      }]
    },



  ];

  const toggleNestedMenu = (id: string) => {
    setSubmenu(prev =>
      prev.includes(id)
        ? prev.filter(menu => menu !== id)
        : [...prev, id]
    );
  };
  return (
    <aside className=" border-l-[1px] border-gray-100 min-h-[100dvh]  my-2  transition-all duration-300 ease-in-out shadow-xl dark:border-gray-700">
      <div className="flex flex-col">
        <h1 className=" text-xl font-bold my-4 px-2 m-auto">پنل مدیریت</h1>
        <nav className="flex flex-col gap-1">
          {dashBoardItems.map((menu) => (
            <div key={menu.id} className="group ]">
              {!menu.nested && menu.auth ? (
                <Link
                  href={menu.link}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg   hover:text-blue-600 transition-all duration-200
                    ${location === `${menu.link}` ? 'bg-blue-50 text-blue-600 dark:bg-midnight-ndigo ' : ''}`}
                >
                  <span className="text-lg">{menu.icon}</span>
                  <span className="text-sm font-medium">{menu.name}</span>
                </Link>
              ) :menu.auth&& (
                <>
                  <button
                    onClick={() => toggleNestedMenu(menu.id)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg  hover:bg-blue-50 hover:text-blue-600  transition-all duration-200
                      ${submenu.includes(menu.id) ? '' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{menu.icon}</span>
                      <span className="text-sm font-medium">{menu.name}</span>
                    </div>
                    <IoIosArrowDown
                      className={`transform transition-transform duration-200 ${submenu.includes(menu.id) ? 'rotate-180' : ''
                        }`}
                      size={16}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${submenu.includes(menu.id) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pr-4 py-1">
                      {menu.child?.map((child) => (
                       child.auth&& <Link
                          key={child.id}
                          href={child.link}
                          className={`flex items-center gap-2 px-4 py-2 mr-4 rounded-lg   transition-all duration-200 text-sm
                            ${location === `${child.link}` ? 'bg-blue-50 text-blue-600 dark:bg-midnight-ndigo  ' : ''}`}
                        >

                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar