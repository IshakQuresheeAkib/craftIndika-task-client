import {DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import Column from './Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import axios from 'axios';
import { getStoredTasks, saveTasksToLS } from '../utilities/localStorage';



const TaskManager = () => {

    const [tasks,setTasks] = useState(getStoredTasks())
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            setTasks(res.data);
            saveTasksToLS(res.data)
        })
        .catch(err=>console.log(err))
    },[])

 
    
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