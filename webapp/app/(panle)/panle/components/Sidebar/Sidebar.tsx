"use client"
import React, { ReactNode, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { CgComponents, CgWebsite } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

import { TbReport } from "react-icons/tb"
import Link from 'next/link';
type menu = {
    id: string;
    name: string;
    link: string;
    icon?: ReactNode;
    nested?: boolean;
    child?: menu[];
  };
  
  type menusType = menu[];
function Sidebar() {
   // const location = useLocation();
    const [submenu, setSubmenu] = useState<string[]>([]);
    const dashBoardItems: menusType = [
        {
          id: "1",
          name: "وب سایت",
          link: "/",
          icon: <CgWebsite size={20} />,
          nested: false,
        },
        {
          id: "11",
          name: "پنل کاربری",
          link: "/dashboard",
          icon: <MdDashboard size={20} />,
          nested: false,
        },
        {
          id: "2",
          name: "کاربران ",
          link: "/users",
          icon: <FaUsers size={20} />,
          nested: false,
        },
        {
          id: "3",
          name: "وبلاگ",
          link: "/blogs",
          icon: <FaBlog size={20} />,
          nested: false,
        },
 
        // {
        //   id: "7",
        //   name: "کامپوننت ها",
        //   link: "",
        //   icon: <CgComponents size={20} />,
        //   nested: true,
        //   child: [
        //     {
        //       id: "c1-7",
        //       name: "دکمه ها",
        //       link: "/buttons",
        //     },
        //     {
        //       id: "c2-7",
        //       name: "فرم  ها",
        //       link: "/forms",
        //     },
        //     {
        //       id: "c3-7",
        //       name: "اسلایدر ها",
        //       link: "/slider",
        //     },
        //     {
        //       id: "c4-7",
        //       name: "مدال ها",
        //       link: "/modals",
        //     },
        //     {
        //       id: "c5-7",
        //       name: "کارد ها",
        //       link: "/cards",
        //     },
        //   ],
        // },
      ];
    
      const toggleNestedMenu = (id: string) => {
        setSubmenu(prev => 
          prev.includes(id) 
            ? prev.filter(menu => menu !== id)
            : [...prev, id]
        );
      };
  return (
    <aside className="bg-Navy-blue min-h-[100dvh] mx-2 rounded-2xl my-2 w-64 transition-all duration-300 ease-in-out">
      <div className="p-4">
        <h1 className="text-white text-xl font-bold mb-6 px-2">پنل مدیریت</h1>
        <nav className="flex flex-col gap-1">
          {dashBoardItems.map((menu) => (
            <div key={menu.id} className="group">
              {!menu.nested ? (
                <Link
                  href={menu.link}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-700/30 hover:text-white transition-all duration-200
                    ${location.pathname === menu.link ? 'bg-blue-700/40 text-white' : ''}`}
                >
                  <span className="text-lg">{menu.icon}</span>
                  <span className="text-sm font-medium">{menu.name}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleNestedMenu(menu.id)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-700 hover:text-white transition-all duration-200
                      ${submenu.includes(menu.id) ? 'bg-blue-700 text-white' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{menu.icon}</span>
                      <span className="text-sm font-medium">{menu.name}</span>
                    </div>
                    <IoIosArrowDown 
                      className={`transform transition-transform duration-200 ${
                        submenu.includes(menu.id) ? 'rotate-180' : ''
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
                        <Link
                          key={child.id}
                          href={child.link}
                          className={`flex items-center gap-2 px-4 py-2 mr-4 rounded-lg text-gray-300 hover:bg-blue-700/30 hover:text-white transition-all duration-200 text-sm
                            ${location.pathname === child.link ? 'bg-blue-700/40 text-white' : ''}`}
                        >
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
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