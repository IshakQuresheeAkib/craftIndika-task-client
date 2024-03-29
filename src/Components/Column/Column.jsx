import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Task from "../Task/Task";

const Column = ({tasks}) => {
    
    return (
        <div className=" shadow-inner shadow-black/30 rounded-2xl p-5">
            <p className="font-bold text-2xl">Tasks</p>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {
                tasks?.map((task) =><Task id={task.id} key={task.id} title={task.title}/>)
            }
            </SortableContext>
        </div>
    );
}
export default Column;