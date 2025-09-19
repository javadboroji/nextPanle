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
    <div className="group mx-2 ">
                {!menu.nested && menu.auth ? (
                  <Link
                    href={menu.link}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl   hover:text-blue-600 transition-all duration-200
                    ${location === `${menu.link}` ? 'bg-blue-50 text-blue-600 dark:bg-midnight-ndigo ' : ''}`}
                  >
                    <span className="text-xl">{menu.icon}</span>
                    <span className="text-lg font-medium">{menu.name}</span>
                  </Link>
                ) : menu.auth && (
                  <>
                    <button
                      onClick={() => toggleNestedMenu(menu.id)}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg  hover:bg-blue-50 hover:text-blue-600  transition-all duration-200
                      ${submenu.includes(menu.id) ? '' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{menu.icon}</span>
                        <span className="text-lg font-medium ">{menu.name}</span>
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
                          child.auth && <Link
                            key={child.id}
                            href={child.link}
                            className={`text-lg flex items-center gap-2 px-4 py-2 mr-4 rounded-2xl   transition-all duration-200 text-
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
  )
})
SidebarItem.displayName = "SidebarItem";
export default SidebarItem