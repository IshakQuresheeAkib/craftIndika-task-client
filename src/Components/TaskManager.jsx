import {DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors} from '@dnd-kit/core';
import Column from './Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { isTasksExist, saveTasksToLS } from '../utilities/localStorage';
import { useState } from 'react';
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers';



const TaskManager = ({tasks,setTasks}) => {

    isTasksExist() && saveTasksToLS(tasks)
 
    const [idNumber,setIdNumber] = useState(0)
    const getTaskPos = id => tasks.findIndex(task => task.id === id)


    const handleClick = () => {
        alert('hello')
    }

    const handleDragEnd = event => {
        const {active,over} = event
        setIdNumber(active.id)
        console.log('active:',active.id);

        if (active?.id === over?.id) return;
        setTasks(tasks =>{
            const originalPos = getTaskPos(active?.id)
            const newPos = getTaskPos(over?.id)
            // console.log(active.id);
            // const draggedTask = tasks.filter(item => item.id == active.id);
            // console.log(draggedTask);
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
        <div>
            <DndContext sensors={sensor} onDragEnd={handleDragEnd} collisionDetection={closestCorners} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
                <Column tasks={tasks} idNumber={idNumber} handleClick={handleClick}/>
            </DndContext>
        </div>
    );
}
export default TaskManager;