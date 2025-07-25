"use client"
import { useDraggable } from '@dnd-kit/core';
import React from 'react'
import { Itask } from '../Context/MyDndContext';
import Image from 'next/image';
import { CiCalendarDate } from "react-icons/ci";
import avatar from "@/public/images.jpg"
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


const DragTask: React.FC<IDragTask> = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,

  });
  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    transition: 'transform 200ms ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    cursor: 'grab',
  };
  return (
    <div className='shadow-xl p-2 my-1 flex w-full flex-col ' key={item.id} ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <div className='flex justify-between w-full'>
        <p> {item.title}</p>
        <Image src={avatar} alt='avatar' className='w-8 h-8 rounded-full object-contain' width={10} height={10} />
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <CiCalendarDate />
          <span className='text-sm'>{item.date}</span>
        </div>
      </div>
    </div>
  )
}