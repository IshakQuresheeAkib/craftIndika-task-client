const Column = ({tasks}) => {
    
    return (
        <div className="">
            <p className="font-bold text-2xl">Tasks</p>
            {
                tasks?.map((task) =><div key={task.id} className="mt-5 shadow p-3">{task.title}</div>)
            }
        </div>
    );
}
export default Column;