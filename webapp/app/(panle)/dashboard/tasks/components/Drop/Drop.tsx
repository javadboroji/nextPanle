"use client"
import { useDroppable } from '@dnd-kit/core';
import { GoPlus } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

import React from 'react'
import { Itask } from '../Context/MyDndContext';
import Drag from '../Drag/Drag';
import clsx from 'clsx';
import ButtonLayout from '@/app/components/Buttons/ButtonLayout';
interface IDrop {
    tasks: Itask[]
}
interface IDropZone {
    id: string;
    title: string;
    color: string;
    textColor: string;
    accepts: string[];
    tasks: Itask[];
}
const Drop: React.FC<IDrop> = ({ tasks }) => {

    return (
        <div className='flex flex-col border-[1px] rounded-2xl p-4 border-gray-100 dark:border-gray-700  my-2 shadow-xl overflow-hidden'>
            <div className='w-full flex border-b-[1px] border-gray-100 dark:border-gray-700 '>
                <ButtonLayout customizseClass='!p-2 !rounded-[8px] flex items-center' btnType='fill' type='button' >
                    <GoPlus size={24} className='mx-1' />
                    اضافه کردن تسک جدید
                </ButtonLayout>
                <ButtonLayout customizseClass='!p-2 !rounded-[8px] flex items-center' btnType='outline' type='button' >
                    <CiFilter size={24} className='mx-1' />
                    فیلتر
                </ButtonLayout>
            </div>
            <div className='flex justify-between  min-h-[40rem]'>

                <DropZone
                    accepts={['type-todo']}
                    color='bg-gray-300'
                    id='todo'
                    textColor='text-white'
                    title='درانتظار انجام'
                    tasks={tasks}
                />
                <DropZone
                    accepts={['type-in-progress']}
                    color='bg-orange-300'
                    id='progress'
                    textColor='text-orange-600'
                    title='درحال انجام'
                    tasks={tasks}
                />
                <DropZone
                    accepts={['type-done']}
                    color='bg-green-300'
                    id='done'
                    textColor='text-green-600'
                    title='انجام شده'
                    tasks={tasks}
                />
            </div>
        </div>
    )
}

export default Drop


const DropZone: React.FC<IDropZone> = ({ accepts, id, title, color, textColor, tasks }) => {
    const { setNodeRef } = useDroppable({
        id,
        data: {
            accepts,
        },
    });
    const filterTasks = tasks.filter((task) => task.status === id)
    return (
        <div ref={setNodeRef} className=' w-1/3  border-l-[1px] border-gray-300 dark:border-gray-700 '>
            <div className=' p-1 flex justify-between items-center'>
                <div className='flex'>
                    <p> {title}</p>
                    <span className={clsx(`rounded-full w-5 h-5 flex justify-center mx-1  text-sm `, color, textColor)}> {filterTasks.length}</span>

                </div>
                <ButtonLayout btnType='link'>
                    <IoMdMore size={24} />
                </ButtonLayout>
            </div>
            <div className='w-full'>
                {filterTasks?.map((task) => {
                    return <Drag item={task} key={task.id} />
                })}
            </div>
        </div>
    )
}