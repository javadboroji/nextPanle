"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

function SearchDataTable() {
    const [value, setValue] = useState("")
    const searchTable=()=>{
        console.log(value);
        
    }
  return (
    <div className='flex w-1/3 '>
        <Input value={value}  iconButton={ <button onClick={searchTable} className='absolute left-5 cursor-pointer'><CiSearch /></button> } placeholder='جستجو..'/>
    </div>
  )
}

export default SearchDataTable