import React, {useState, useEffect} from 'react';
import SelectedItem from './SelectedITem';
import usePatch from './UpdateStatus';
// import Search from './search';
// import { useNavigate } from 'react-router';
// import { NavLink } from 'react-router-dom';

function TaskListItem({ task}) {
  const [tasks, setTasks]=useState([])
  const [selectedItem, setSelectedItem]=useState(false)
  const [searchQuery, setSearchQuery] = useState('');



  useEffect(()=>{
    fetch ("http://localhost:9292/tasks")
    .then(r=>r.json())
    .then(data=>setTasks(data))
  },[])
  console.log(tasks)

 
  const handleSearch = () => {
    const filteredTasks = tasks.filter((task) => {
      return task.due_date.includes(searchQuery);
    },[]);
    return filteredTasks
  };

  return (
    <div>
  <li  onClick={() =>(task.id)}>
      <h3 className='items' onClick={()=>setSelectedItem(!selectedItem)}>{task.title}</h3>
      
        {selectedItem ? <SelectedItem task={task}/> : ""}
      
     
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

        <input
         style={{
          position: "absolute",
          top: "10px",
          right: "10px"}}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px"}}>Search</button>
      {filteredTasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
   
    </div>
 
    
  );
}

export default TaskListItem;
