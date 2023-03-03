import React, {useState, useEffect} from 'react';

function TaskListItem({ task, onClick }) {
  const [tasks, setTasks]=useState([])
  useEffect(()=>{
    fetch ("http://localhost:9292/tasks")
    .then(r=>r.json())
    .then(data=>setTasks(data))
  },[])
  console.log(tasks)
  return (
    <li onClick={() => onClick(task.id)}>
      <h3>{task.title}</h3>
      <p>{task.dueDate}</p>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </li>
  );
}

export default TaskListItem;
