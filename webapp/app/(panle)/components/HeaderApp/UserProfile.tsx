import ButtonLayout from '@/app/components/Buttons/ButtonLayout'
import PopoverLayout from '@/app/components/popover/PopoverLayout'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

function UserProfile() {
  return (
    <div className={"flex items-baseline "}>
    <FaUserAlt className="text-gray-300 mt-2" size={18} />
      <PopoverLayout label={"جواد بروجی"}>
        <ul>
          <li className="border-b-[1px] border-gray-100"> <ButtonLayout btnType="link"> مشاهده پروفایل</ButtonLayout> </li>
          <li> <ButtonLayout btnType="link">خروج</ButtonLayout> </li>
        </ul>
      </PopoverLayout>
      
   
  </div>
  )
}

export default UserProfile