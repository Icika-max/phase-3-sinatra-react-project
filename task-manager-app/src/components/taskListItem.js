import React, {useState, useEffect} from 'react';
import SelectedItem from './SelectedITem';

function TaskListItem({ task, onClick }) {
  const [tasks, setTasks]=useState([])
  const [selectedItem, setSelectedItem]=useState(false)
  useEffect(()=>{
    fetch ("http://localhost:9292/tasks")
    .then(r=>r.json())
    .then(data=>setTasks(data))
  },[])
  console.log(tasks)
  return (
    <li onClick={() => onClick(task.id)}>
      <h3 onClick={()=>setSelectedItem(!selectedItem)}>{task.title}</h3>
      <div>
        {selectedItem ? <SelectedItem task={task}/> : ""}
      </div>
     
    </li>
  );
}

export default TaskListItem;
