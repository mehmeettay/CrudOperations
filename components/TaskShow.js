function TaskShow({task , deleteProps}) {
    console.log(task);

    const handleDelete = () =>{
        deleteProps(task.id);
    }
    return ( 
    <div className="showing-task">
<h3>Your Task:</h3>
<p>{task.title}</p>
<h3>To Do:</h3>
<p>{task.taskAr}</p>
<div>
    <button className="deleteButton" onClick={handleDelete}>Delete</button>
    <button className="updateButton">Update</button>
</div>
    </div>
     );
}

export default TaskShow;