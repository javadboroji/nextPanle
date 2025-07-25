"use client"
import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import { ComponentType, useState } from 'react';
import Drag from '../Drag/Drag';
import Drop from '../Drop/Drop';
import { v4 as uuidv4 } from 'uuid';

interface IDataType {
    type: 'type1' | 'type2',
    accepts?: ('type1' | 'type2')[];
}
interface IDrag {
    id: string | number;
    title: string;
    data: IDataType;
}
type TaskStatus = 'todo' | 'in-progress' | 'done';
export interface Itask {
    id: string, title: string, status: TaskStatus, date: string, avatar: string
}

const MyDndContext = () => {
    const [droped, setDroped] = useState<Itask[]>([]);


    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            delay: 0,
            tolerance: 0,
        },
    });

    const sensors = useSensors(pointerSensor);

    const tasks: Itask[] = [
        {
            id: uuidv4(),
            title: "چک کردن سایت",
            status: "todo", date: "1404/04/20",
            avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE"
        },
        { id: uuidv4(), title: "تست نویسی", status: "done", date: "1404/08/05", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE" },
        { id: uuidv4(), title: "تماس بامدیر", status: "todo", date: "1404/05/07", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE" },
        { id: uuidv4(), title: "پرداخت حقوق", status: "in-progress", date: "0404/05/05", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F13899952-female-user-profile-the-avatar-is-a-woman-a-character-for-a-screen-saver-with-happy-emotions-for-website-and-mobile-app-design-vector-illustration-on-a-white-isolated-background&psig=AOvVaw0SXxec26gvjYKzrouUeweE&ust=1753549880095000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjHicXA2I4DFQAAAAAdAAAAABAE" },
    ]
    const onDragEndHandler = (event: DragEndEvent) => {
        const { active, over } = event;
        //setDroped(active.id)
        // if (over && over.id === "droppable") {
        //     setDroped(prev => [...prev, active]);
        //     console.log("Dropped:", active.id, "on:", over.id);
        // }


    }
    return (
        <DndContext sensors={sensors} onDragEnd={(event) => onDragEndHandler(event)}>


            <Drop tasks={tasks} />
        </DndContext>
    )
}

export default MyDndContext