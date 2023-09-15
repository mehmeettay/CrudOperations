function TaskCreate() {
    return ( <div className='task-create'>
        <h3>Enter a new task</h3>
        <form className='form'>
            <label className='task-title'>Title</label>
            <input className='task-input'/>
            <label className='task-title'>Enter the task</label>
            <textarea className='task-input' />
            <button className='button'>Add</button>
        </form>
    </div> );
}

export default TaskCreate;