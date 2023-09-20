
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const createTask =(title,taskAr)=>
  {
    const createdTask = [
      ...tasks,
      {
        id:Math.round(Math.random()*99),
        title:title,
        taskAr:taskAr,
      },
    ]
    setTasks(createdTask);
  }

  const deletefromId = (id)=>{
    const afterDeletingTasks=tasks.filter((task)=>{
      return task.id !==id;
    })
    setTasks(afterDeletingTasks);
  }
  
  return (
    <div className="App">
      <TaskCreate createFunction={createTask}/>
      <h2>Tasks</h2>
      <TaskList tasks={tasks} deleteProps={deletefromId}/>
    </div>
  );
}

export default App;
