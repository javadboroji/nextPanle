'use client'
import React from 'react'
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
function HeaderAction() {
    const user={
        userName:"جواد بروجی" ,
        email :"javadboroji2222@gmail.com"
    }
  return (
    <div className={"flex  justify-between w-[95%]"}>
    <div className={"flex items-center"}>
      <button className={" border-0 focus:outline-0 mx-2 hover:cursor-pointer"}>
        {" "}
        <IoIosSettings  className='text-gray-300'  fontSize={24} />
      </button>
      <button className={" border-0 focus:outline-0 mx-2 hover:cursor-pointer"}>
        {" "}
        <IoIosNotifications className='text-gray-300'  fontSize={24} />
      </button>
      <button className={" border-0 focus:outline-0 mx-2 hover:cursor-pointer"}>
        {" "}
        <MdEmail className='text-gray-300'  fontSize={24} />
      </button>
    </div>  
   
      
      <div className={"flex items-baseline "}>
       <div className='w-8 h-8 rounded-full'>
       <FaUserAlt className='text-gray-300' size={20}/>
        </div> 
        <p className={" text-sm"}> {user?.userName}</p>
        {/* <span className={"text-wihte text-base text-xs"}> {user?.email}</span> */}
      </div>
  </div>
  )
}

export default HeaderAction