"use client"
import { useDroppable } from '@dnd-kit/core';

import React from 'react'
import { Itask } from '../Context/MyDndContext';
import Drag from '../Drag/Drag';
import clsx from 'clsx';
interface IDrop {
    tasks: Itask[]
}
interface IDropZone {
    id: string;
    title: string;
    count: number;
    color: string;
    textColor: string;
    accepts: string[];
    tasks: Itask[];
}
const Drop: React.FC<IDrop> = ({ tasks }) => {

    return (

        <div className='flex justify-between  min-h-[30rem]'>

            <DropZone
                accepts={['type-todo']}
                color='gray-300'
                count={3}
                id='todo'
                textColor='white'
                title='درانتظار انجام'
                tasks={tasks}
            />
            <DropZone
                accepts={['type-in-progress']}
                color='orange-300'
                count={4}
                id='in-progress'
                textColor='orange-600'
                title='درحال انجام'
                tasks={tasks}
            />
            <DropZone
                accepts={['type-done']}
                color='green-300'
                count={1}
                id='done'
                textColor='green-600'
                title='انجام شده'
                tasks={tasks}
            />
        </div>
    )
}

export default Drop


const DropZone: React.FC<IDropZone> = ({ accepts, id, title, count, color, textColor,tasks }) => {
    const bgColor=`bg-${color}`
    const texColor=`text-${textColor}`
    const { setNodeRef } = useDroppable({
        id,
        data: {
            accepts,
        },
    });
    const filterTasks=tasks.filter((task)=>task.status ===id)
    return (
        <div ref={setNodeRef} className=' w-1/3 mx-1 border-l-[1px] border-gray-300 '>
            <div className=' p-1 flex '>
                <p> {title}</p>
                <span className={clsx( 'rounded-full w-6 h-6 flex justify-center mx-1', bgColor, texColor)}> {count}</span>
            </div>
          <div className='w-full'>
              {filterTasks?.map((task)=>{
                return <Drag item={task} key={task.id} />
            })}
          </div>
        </div>
    )
}