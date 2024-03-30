import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "../Task/Task";

const Column = ({tasks}) => {
    
    return (
        <div className=" shadow-inner shadow-black/30 rounded-2xl md:p-5 p-2">
            
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {
                tasks?.map((task) =><Task id={task.id} key={task.id} title={task.title} completed={task.completed}/>)
            }
            </SortableContext>
        </div>
    );
}
export default Column;