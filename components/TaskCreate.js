import {useState} from 'react'
function TaskCreate() {
    const [title, setTitle] = useState('');
    const [taskAr, setTaskAr] = useState('');

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) =>{
        setTaskAr(event.target.value);
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
    }

    console.log(title,taskAr);
    return ( <div className='task-create'>
        <h3>Enter a new task</h3>
        <form className='form'>
            <label className='task-title'>Title</label>
            <input className='task-input' value={title} onChange={handleChange}/>
            <label className='task-title'>Enter the task</label>
            <textarea value={taskAr} onChange={handleTaskChange} className='task-input' />
            <button className='button' onClick={handleSubmit}>Add</button>
        </form>
    </div> );
}

export default TaskCreate;