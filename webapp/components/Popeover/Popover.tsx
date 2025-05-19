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
  <PopoverTrigger className='mx-2 font-bold hover:cursor-pointer'>{label}</PopoverTrigger>
  <PopoverContent>{children}</PopoverContent>
</Popover>
  )
}

export default PopoverLayout