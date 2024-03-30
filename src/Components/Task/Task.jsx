import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import { useState } from "react";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdCheckBox } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const Task = ({id,title,completed,idNumber,handleClick}) => {
    
    // console.log(idNumber);
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
        
        onClick={()=>console.log(idNumber)}
        className={`shadow p-2 mt-4 rounded-xl flex gap-2 items-center bg-white/90 touch-none justify-between w-11/12 mx-auto ${completed && ' line-through'}`}>
        {/* <div className="text-blue-500 text-xl" >
            {completed ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        </div>  */}
            <p className="w-5/6">{title}</p>
            <MdDelete className="text-xl hover:text-blue-500 duration-500" onClick={()=>handleClick()}/>
        </div>
    );
}
export default Task;