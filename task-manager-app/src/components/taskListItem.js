import React, {useState, useEffect} from 'react';
import SelectedItem from './SelectedITem';
import usePatch from './UpdateStatus';

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
    <>
    <li  onClick={() =>(task.id)}>
      <h3 className='items' onClick={()=>setSelectedItem(!selectedItem)}>{task.title}</h3>
      <div>
        {selectedItem ? <SelectedItem task={task}/> : ""}
      </div>
     
    </li>
    <button onClick={()=>{
    const { error, patchResponse, patch } = usePatch(
      `http://localhost:9292/tasks/${task.id}`
    );
    if (error) {
      console.log(error);
    }
  
    if (patchResponse) {
      window.location.reload();
    }
    patch({
      title: task.title,
      description: task.description,
    });
    }}>update task</button>
    </>
  );
}

export default TaskListItem;
