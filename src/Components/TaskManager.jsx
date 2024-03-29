import {DndContext, closestCorners} from '@dnd-kit/core';
import { useState } from 'react';
import Column from './Column/Column';



const TaskManager = () => {
    
    const [tasks,setTasks] = useState([
        { id: 1, title: "Add tests to homepage" },
        { id: 2, title: "Fix styling in about section" },
        { id: 3, title: "Learn how to center a div" },
      ])

    return (
        <DndContext collisionDetection={closestCorners}>
            <Column tasks={tasks}/>
        </DndContext>
    );
}
export default TaskManager;