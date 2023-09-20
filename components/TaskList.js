import TaskShow from "./TaskShow";
function TaskList ({tasks, deleteProps}) {
    return ( <div
    className="task-list">
        {tasks.map((task)=>{
            return <TaskShow key={task.id} task={task} deleteProps={deleteProps}/>;
        })}
    </div> );
}

export default TaskList;