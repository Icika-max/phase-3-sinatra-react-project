import React from 'react';
import TaskListItem from './taskListItem';
import { useEffect, useState } from 'react';
// import Search from './search';

function TaskList() {
  const [tasks, setTasks]=useState([])
  useEffect(()=>{
    fetch ("https://icika.onrender.com//tasks")
    .then(r=>r.json())
    .then(data=>setTasks(data.data))
  },[])
  console.log(tasks)
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
          
        ))}
      </ul>
 
    </div>
  );
}

export default TaskList;