import {DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import Column from './Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import axios from 'axios';



const TaskManager = () => {

    const [datas, setDatas] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            setDatas(res.data);
            localStorage.setItem('todos', JSON.stringify(res.data))
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    },[])

    useEffect(() => {
        setTasks(datas);
    }, [datas]); 
    
    const [tasks,setTasks] = useState(datas)
    
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