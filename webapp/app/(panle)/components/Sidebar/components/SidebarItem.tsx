"use client"
import React, { useCallback, useState } from 'react'
import { menuType } from '../Sidebar'
import { IoIosArrowDown } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
interface SidebarItemProps{
    menu:menuType ,
    toggleNestedMenu:(id:string)=>void ,
    submenu:string[]
}

const  SidebarItem:React.FC<SidebarItemProps>= React.memo(({menu ,toggleNestedMenu ,submenu})=> {
      
    const location = usePathname();

 return (
    <div className="group mx-2 my-1">
      {!menu.nested && menu.auth ? (
        <Link
          href={menu.link || "#"}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 ${
            location === `${menu.link}` ?
              'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' :
              'text-gray-700 dark:text-gray-300'
          }`}
        >
          <span className="text-2xl">{menu.icon}</span>
          <span className="text-base font-medium">{menu.name}</span>
        </Link>
      ) : (
        menu.auth && (
          <>
            <button
              onClick={() => toggleNestedMenu(menu.id)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 ${
                submenu.includes(menu.id)
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{menu.icon}</span>
                <span className="text-base font-medium">{menu.name}</span>
              </div>
              <IoIosArrowDown
                className={`transform transition-transform duration-300 ${submenu.includes(menu.id) ? 'rotate-180' : ''}`}
                size={18}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                submenu.includes(menu.id)
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-4 border-l border-gray-200 dark:border-gray-700 pl-4 py-2 space-y-1">
                {menu.child?.map(
                  (child) =>
                    child.auth && (
                      <Link
                        key={child.id}
                        href={child.link || '#'}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-400 ${
                          location === `${child.link}`
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {child.name}
                      </Link>
                    )
                )}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
})
SidebarItem.displayName = "SidebarItem";
export default SidebarItem