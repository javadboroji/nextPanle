import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
 interface IPopoverLayout{
    label:string;
    children:React.ReactNode
 }
const PopoverLayout:React.FC<IPopoverLayout>=({label ,children})=> {
  return (
 <Popover>
  <PopoverTrigger className='mx-2  hover:cursor-pointer'>{label}</PopoverTrigger>
  <PopoverContent className='bg-white border-0 shadow-2xl'>{children}</PopoverContent>
</Popover>
  )
}

export default PopoverLayout