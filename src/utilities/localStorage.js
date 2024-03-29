const getStoredTasks = () => {
    const storedTasksString = localStorage.getItem('tasks');
    if(storedTasksString)  {return JSON.parse(storedTasksString) } 
    return [];
}


const saveTasksToLS = (id) => {
    const tasksStringified = JSON.stringify(id);
    localStorage.setItem('tasks',tasksStringified);
}

const addToLS = (id) => {
    const tasks = getStoredTasks();
    tasks.push(id);
    saveTasksToLS(tasks);
}

const removeFromLS = (id) => {
    const tasks = getStoredTasks();
    const remaining = tasks.filter(item => item !== id);
    saveTasksToLS(remaining);
}

const removeAllFromLS = () => {
    localStorage.removeItem('tasks');
}

export { addToLS,getStoredTasks,removeFromLS,removeAllFromLS }