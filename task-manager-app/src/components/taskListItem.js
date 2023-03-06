import React, {useState, useEffect} from 'react';
import SelectedItem from './SelectedITem';
import usePatch from './UpdateStatus';
// import Search from './search';
// import { useNavigate } from 'react-router';
// import { NavLink } from 'react-router-dom';

function TaskListItem({ task}) {
  const [tasks, setTasks]=useState([])
  const [selectedItem, setSelectedItem]=useState(false)
 



  useEffect(()=>{
    fetch ("https://icika.onrender.com/tasks")
    .then(r=>r.json())
    .then(data=>setTasks(data.data))
  },[])
  console.log(tasks)

  

  return (
    <div>
  <li  onClick={() =>(task.id)}>
      <h3 className='items' onClick={()=>setSelectedItem(!selectedItem)}>{task.title}</h3>
      
        {selectedItem ? <SelectedItem task={task}/> : ""}
      
     
    </li>
    <button onClick={()=>{
    const { error, patchResponse, patch } = usePatch(
      `https://icika.onrender.com/tasks/${task.id}`
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

      
  
   
    </div>
 
    
  );
}

export default TaskListItem;
