"use client"
import { useDraggable } from '@dnd-kit/core';
import React from 'react'
import { Itask } from '../Context/MyDndContext';
import Image from 'next/image';
import { CiCalendarDate } from "react-icons/ci";
import avatar from "@/public/avatar.jpg"
interface DragProps {
  item: Itask;
}
interface IDragTask {
  item: Itask
}
const Drag = ({ item }: DragProps) => {
  return (
    <DragTask item={item} />
  )
}

export default Drag


const DragTask: React.FC<IDragTask> =React.memo( ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,

  });
  const style = {
   transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'grab',
  };
  return (
    <div className='dark:bg-midnight-slate  shadow-xl border-[1px] border-gray-100   p-2  rounded-[8px] mx-auto my-1 flex w-11/12 flex-col ' key={item.id} ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <div className='flex flex-col w-full'>
        <div className='flex items-center'>
          <Image src={avatar} alt='avatar' className='w-8 h-8 rounded-full object-contain' width={80} height={80} />
          <p className='text-sm p-2'> {item.title}</p>
        </div>
        <p className='py-2 text-gray-300 text-sm'> {item.description}</p>
      </div>
      <div className='flex justify-between mt-1'>
        <div className='flex items-center'>
          <CiCalendarDate size={24} className='me-1' />
          <span className='text-xs'>{item.date}</span>
        </div>
      </div>
    </div>
  )
}) 