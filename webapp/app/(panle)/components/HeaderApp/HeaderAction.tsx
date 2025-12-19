"use client";
import SheetLayout from "@/app/components/Sheet/SheetLayout";
import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import UserProfile from "./UserProfile";

function HeaderAction() {

  const [open, setOpen] = useState(false)
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
        onClick={()=>setOpen(true)}
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
        <UserProfile/>

     <SheetLayout open={open} setopen={setOpen} >
          <h1> Notifcation ....</h1>
     </SheetLayout>
    </div>
  );
}

export default HeaderAction;
