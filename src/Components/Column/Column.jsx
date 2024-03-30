import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "../Task/Task";

const Column = ({tasks,idNumber,handleClick}) => {
    
    return (
        <div className=" shadow-inner shadow-black/10 rounded-2xl py-5 bg-slate-100">
            
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {
                tasks?.map((task) =><Task id={task.id} key={task.id} title={task.title} handleClick={handleClick} idNumber={idNumber} completed={task.completed}/>)
            }
            </SortableContext>
        </div>
    );
}
export default Column;