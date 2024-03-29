import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({id,title}) => {
    
    const {attributes,listeners,setNodeRef,transform,transition} =  useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div 
        ref={setNodeRef} 
        {...attributes} 
        {...listeners} 
        style={style}
        className="shadow-sm p-2 flex gap-2 items-center touch-none">
        <input type="checkbox" className='checkbox checkbox-info checkbox-sm '></input>
        {title}
        </div>
    );
}
export default Task;