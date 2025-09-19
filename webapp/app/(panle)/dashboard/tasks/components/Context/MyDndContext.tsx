"use client"
import {
    closestCorners,
    DndContext,
    DragEndEvent,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import Drop from '../Drop/Drop';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useChangeStatus, useGetAllTask } from '@/app/(panle)/Services/task.service';



type TaskStatus = 'todo' | 'progress' | 'done';
export interface Itask {
    id: string, title: string, status: TaskStatus, date: string, avatar: string, description: string
}

const MyDndContext = () => {
    const { data } = useGetAllTask()
    const { mutate: changeStatus } = useChangeStatus()

    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            delay: 0,
            distance: 2,

        },


    });

    const sensors = useSensors(pointerSensor);
    const [tasks, setTasks] = useState<Itask[]>([]);
    const onDragEndHandler = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;
        const newStatus = over.id as TaskStatus;

           setTasks((prevTasks) => {
        const task = prevTasks.find(t => t.id === active.id);
        if (!task) return prevTasks;

        // فقط وقتی ستون عوض بشه
        if (task.status === newStatus) {
            return prevTasks; // همون ستون بود → هیچی نکن
        }

        // 👇 فقط یک بار اینجا ریکوئست می‌زنیم
        changeStatus({ id: task.id, status: newStatus });

        return prevTasks.map(t =>
            t.id === active.id ? { ...t, status: newStatus } : t
        );
    });

    }
    useEffect(() => {
        setTasks(data)
    }, [data])

    return (
        <DndContext collisionDetection={closestCorners}
            sensors={sensors} onDragEnd={(event) => onDragEndHandler(event)}>
            <Drop tasks={tasks ?? []} />

        </DndContext>
    )
}

export default MyDndContext