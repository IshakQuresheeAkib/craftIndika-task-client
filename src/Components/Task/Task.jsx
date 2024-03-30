import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";


const Task = ({id,title,completed,idNumber}) => {
    
    const {attributes,listeners,setNodeRef,transform,transition} =  useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    
    console.log();

    return (
        <div 
        ref={setNodeRef} 
        {...attributes} 
        {...listeners} 
        style={style}
        
        onClick={()=>console.log(idNumber)}
        className={`shadow p-2 mt-4 rounded-xl flex gap-2 items-center bg-white/90 cursor-grab touch-none justify-between w-11/12 mx-auto ${completed && ' line-through'}`}>
            <p className="w-5/6">{title}</p>
            <RxDragHandleDots2 className="text-xl hover:text-blue-500 duration-500" />
        </div>
    );
}
export default Task;