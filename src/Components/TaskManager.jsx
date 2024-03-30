import {DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors} from '@dnd-kit/core';
import Column from './Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { getStoredTasks, saveTasksToLS } from '../utilities/localStorage';



const TaskManager = ({tasks,setTasks}) => {

    console.log(tasks);
    saveTasksToLS(tasks)
 
    
    const getTaskPos = id => tasks.findIndex(task => task.id === id)

    const handleDragEnd = event => {
        const {active,over} = event

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
        <div >
            
            <DndContext sensors={sensor} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Column tasks={tasks}/>
        </DndContext>
        </div>
    );
}
export default TaskManager;