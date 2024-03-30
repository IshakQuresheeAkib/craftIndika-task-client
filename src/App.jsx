import { useRef, useState } from "react";
import TaskManager from "./Components/TaskManager"
import { useEffect } from 'react';
import { addToLS, getStoredTasks, isTasksExist, saveTasksToLS } from "./utilities/localStorage";
import axios from "axios";
import addTask from './assets/tJ9QR0d4pE.json'
import Lottie from "lottie-react";

function App() {

  const taskRef = useRef()
  const [tasks,setTasks] = useState(getStoredTasks())
  
  useEffect(()=>{
  isTasksExist() || 
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        saveTasksToLS(res.data)
        setTasks(getStoredTasks())
      })
    .catch(err=>console.log(err))
  },[])


  const handleAddTask = () =>{
    const newTaskTitle = taskRef.current.value
    if (!newTaskTitle.length) return;
    const existingTasks = getStoredTasks()
    const newTaskId = existingTasks[existingTasks.length - 1].id + 1
    const newTask = {"id":newTaskId,"title":newTaskTitle,"completed":false}
    console.log(newTask);
    taskRef.current.value = ''
    addToLS(newTask);
    setTasks(getStoredTasks())
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-10 mx-3">
      <div className="flex justify-center items-center gap-2">
      <button onClick={()=>document.getElementById('my_modal_5').showModal()}>
        <Lottie animationData={addTask} className="w-16"/>
      </button>
      <p className="font-bold text-5xl">Tasks</p>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-96 mx-auto">
        <div className="modal-box">
          
          <input ref={taskRef} className='input input-info' placeholder='Add New Task' required/>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-info ml-3 text-white rounded-full" onClick={()=>handleAddTask()}>Save</button>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
      
      <TaskManager tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
