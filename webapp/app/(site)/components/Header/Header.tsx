"use client"
import clsx from 'clsx';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
import { IMenu } from './type';

function Header() {
    const [showMenu, setShowMenu] = useState(true);
    const [menuBg, setMenuBg] = useState("transition");
    const menuList:IMenu[] =[
        {
          id: "menu-1",
          label: "Contact Us",
          url: "/",
          child: [],
        },
        {
          id: "menu-2",
          label: "Blog",
          url: "/",
          child: [],
        },
        {
          id: "menu-3",
          label: "Services",
          url: "/",
          child: [
            {
              id: "menu-3-1",
              label: "Services-1",
              url: "/",
              child: [],
            },
            {
              id: "menu-3-2",
              label: "Services Detail",
              url: "/",
              child: [],
            },
          ],
        },
        {
          id: "menu-4",
          label: "Home",
          url: "/",
          child: [],
        },
      ]
    useEffect(() => {
      function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY <= 100) {
          setShowMenu(true);
          setMenuBg("transition");
        } else if (300 < scrollY && scrollY < 900) {
          setShowMenu(false);
        } else if (scrollY > 900) {
          setShowMenu(true);
          setMenuBg("black");
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      handleScroll();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    showMenu && (
        <div
          className={clsx(
            "w-full z-50 fixed top-0 left-0 right-0 h-[6rem]  flex  justify-center transition-transform ease-[cubic-bezier(0.23,1,0.32,1)] duration-[8000ms] ease-in-out",
            showMenu ? "translate-y-0" : "-translate-y-full",
            menuBg === "transition" ? "bg-[#0000001e]" : "bg-black"
          )}
        >
          <ul className="flex items-center">
            {menuList?.map((item) => {
              return (
                <li className="relative px-14 py-8" key={item.id}>
                  <Link className="text-white  font-bold " href={item.url}>
                    {item.label}
                  </Link>
  
                  {item?.child.length > 0 && (
                    <ul className="absolute left-0 top-full bg-black py-4 px-2  m-0 w-full hidden">
                      {item?.child?.map((child) => {
                        return (
                          <li className="my-2" key={child.id}>
                            <Link
                              className="text-white p-2 font-bold "
                              href={child.url}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )
  
  )
}

export default Header