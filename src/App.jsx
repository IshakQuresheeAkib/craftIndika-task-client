import { useRef, useState } from "react";
import TaskManager from "./Components/TaskManager"
import { useEffect } from 'react';
import { addToLS, getStoredTasks, isTasksExist, saveTasksToLS } from "./utilities/localStorage";
import axios from "axios";

function App() {

  const taskRef = useRef()
  const [tasks,setTasks] = useState(getStoredTasks())
  
  console.log(isTasksExist());

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
    const existingTasks = getStoredTasks()
    const newTaskId = existingTasks[existingTasks.length - 1].id + 1
    const newTask = {"id":newTaskId,"title":newTaskTitle,"completed":false}
    console.log(newTask);
    taskRef.current.value = ''
    addToLS(newTask);
    setTasks(getStoredTasks())
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-10">
        <input ref={taskRef} className='input input-info' placeholder='add task' required/>
        <button className="btn btn-info" onClick={()=>handleAddTask()}> Add Task</button>
        <TaskManager tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
