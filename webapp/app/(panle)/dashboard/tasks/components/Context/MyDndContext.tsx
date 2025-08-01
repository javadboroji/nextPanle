"use client"
import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import Drop from '../Drop/Drop';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';



type TaskStatus = 'todo' | 'progress' | 'done';
export interface Itask {
    id: string, title: string, status: TaskStatus, date: string, avatar: string
}

const MyDndContext = () => {


    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            delay: 0,
            tolerance: 50,
        },
    });

    const sensors = useSensors(pointerSensor);
    const [tasks, setTasks] = useState<Itask[]>(
        [
            {
                id: uuidv4(),
                title: "چک کردن سایت",
                status: "todo", date: "1404/04/20",
                avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE"
            },
            { id: uuidv4(), title: "تست نویسی", status: "done", date: "1404/08/05", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE" },
            { id: uuidv4(), title: "تماس بامدیر", status: "todo", date: "1404/05/07", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE" },
            { id: uuidv4(), title: "پرداخت حقوق", status: "progress", date: "0404/05/05", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE" },
        ]
    )
    const onDragEndHandler = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.id === active.id ? { ...task, status: over.id as TaskStatus } : task
            )
        );



    }
    return (
        <DndContext sensors={sensors} onDragEnd={(event) => onDragEndHandler(event)}>
            <Drop tasks={tasks} />
        </DndContext>
    )
}

export default MyDndContext