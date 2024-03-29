import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';

const TaskManager = () => {
    
    return (
        <DndContext>
      <Draggable />
      <Droppable />
    </DndContext>
    );
}
export default TaskManager;