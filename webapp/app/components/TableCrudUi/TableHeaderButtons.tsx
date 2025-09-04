"use client"
import React from 'react'
import ButtonLayout from '../Buttons/ButtonLayout'
import { FaPlus } from "react-icons/fa6";
interface TableHeaderButtonsProps {
  addNewOnclick: () => void,
  lable: string
}
const TableHeaderButtons: React.FC<TableHeaderButtonsProps> = ({ addNewOnclick, lable }) => {
  return (
    <div className='flex items-center my-2'>
      <ButtonLayout btnType='fill' size='md' customizseClass='!bg-[#465FFF] !rounded-[6px]' onClick={() => addNewOnclick()}  >
        <div className=' flex items-center'><FaPlus className='mx-2' /> <span> {lable} </span>  </div>
      </ButtonLayout>
    </div>
  )
}

export default TableHeaderButtons