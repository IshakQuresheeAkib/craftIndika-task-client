import {DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors} from '@dnd-kit/core';
import { useState } from 'react';
import Column from './Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';



const TaskManager = () => {
    
    const [tasks,setTasks] = useState([
        { id: 1, title: "Add tests to homepage" },
        { id: 2, title: "Fix styling in about section" },
        { id: 3, title: "Learn how to center a div" },
    ])
    
    const getTaskPos = id => tasks.findIndex(task => task.id === id)

    const handleDragEnd = event => {
        const {active,over} = event

        if (active.id === over.id) return;
        setTasks(tasks =>{
            const originalPos = getTaskPos(active.id)
            const newPos = getTaskPos(over.id)
            return arrayMove(tasks, originalPos, newPos);
        })

    }

    const sensor = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor,{
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    return (
        <DndContext sensors={sensor} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Column tasks={tasks}/>
        </DndContext>
    );
}
export default TaskManager;