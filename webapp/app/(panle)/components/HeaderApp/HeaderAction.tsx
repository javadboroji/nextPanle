"use client";
import React from "react";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import PopoverLayout from "@/app/components/popover/PopoverLayout";
function HeaderAction() {
  const user = {
    userName: "جواد بروجی",
    email: "javadboroji2222@gmail.com",
  };
  return (
    <div className={"flex items-center  justify-between w-[95%]"}>
      <div className={"flex items-center"}>
        <button
          className={
            " border-[1px] border-gray-100 rounded-full p-2 focus:outline-0 mx-2 hover:cursor-pointer hover:bg-custom-blue group"
          }
        >
          {" "}
          <IoIosSettings
            className="text-gray-300 group-hover:text-white"
            fontSize={24}
          />
        </button>
        <button
          className={
            " border-[1px] border-gray-100 rounded-full p-2 focus:outline-0 mx-2 hover:cursor-pointer hover:bg-custom-blue group/notifcation"
          }
        >
          {" "}
          <IoIosNotifications
            className="text-gray-300 group-hover/notifcation:text-white"
            fontSize={24}
          />
        </button>
        <button
          className={
            " border-[1px] border-gray-100 rounded-full p-2 focus:outline-0 mx-2 hover:cursor-pointer hover:bg-custom-blue group/email"
          }
        >
          {" "}
          <MdEmail
            className="text-gray-300 group-hover/email:text-white"
            fontSize={24}
          />
        </button>
      </div>

      <div className={"flex items-baseline "}>
        <FaUserAlt className="text-gray-300 mt-2" size={18} />
          <PopoverLayout label={user.userName}>
            <ul>
              <li> پروفایل </li>
              <li> خروج </li>
            </ul>
          </PopoverLayout>
          
       
      </div>
    </div>
  );
}

export default HeaderAction;
