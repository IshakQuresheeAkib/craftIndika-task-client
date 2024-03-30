import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import { useState } from "react";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdCheckBox } from "react-icons/md";


const Task = ({id,title,completed}) => {
    
    const {attributes,listeners,setNodeRef,transform,transition} =  useSortable({id})
    // const [isChecked,setIsChecked] = useState(false)
    // ToDo = to make checked completed tasks

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
        className={`shadow-sm p-2 flex gap-2 items-center touch-none ${completed && ' line-through'}`}>
        <div className="text-blue-500 text-xl" >
            {completed ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        </div> */}
        {title}
        </div>
    );
}
export default Task;