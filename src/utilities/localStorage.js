const getStoredTasks = () => {
    const storedTasksString = localStorage.getItem('tasks');
    if(storedTasksString)  {return JSON.parse(storedTasksString) } 
    return [];
}

const isTasksExist = () => {
    const storedTasksString = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasksString?.length) return true;
    return false;
}

const saveTasksToLS = (tasks) => {
    const tasksStringified = JSON.stringify(tasks);
    localStorage.setItem('tasks',tasksStringified);
}

const addToLS = (task) => {
    const tasks = getStoredTasks();
    tasks.push(task);
    saveTasksToLS(tasks)
}

const removeFromLS = (task) => {
    const tasks = getStoredTasks();
    const remaining = tasks.filter(item => item !== task);
    saveTasksToLS(remaining);
}

const removeAllFromLS = () => {
    localStorage.removeItem('tasks');
}

export { addToLS,getStoredTasks,removeFromLS,removeAllFromLS,saveTasksToLS,isTasksExist }