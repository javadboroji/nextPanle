import React, { Dispatch, SetStateAction } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  }from "@/components/ui/sheet"
interface SheetProps {
    children: React.ReactNode;
    open: boolean;
    setopen:Dispatch<SetStateAction<boolean>>
  }
  // Sheet componen
const SheetC:React.FC<SheetProps>=({children ,open ,setopen})=> {
  return (
 <Sheet open={open} onOpenChange={setopen} key={"left"}>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side='left'>
    <div className='p-2 my-6'>
    {children}
    </div>
  </SheetContent>
</Sheet>
  )
}

export default SheetC