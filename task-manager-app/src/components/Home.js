import React, { useState } from 'react';
import TaskCreationForm from './taskCreationForm';
import TaskList from './taskList';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home({ user }) {
  let redirect= useNavigate()
  
  const [tasks, setTasks] = useState([]);

  function handleTaskSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
  <>
 <div className='navbar-container'> 
          <div className='navLinks'>
<ul>
        <li className='nav-item'>
       <NavLink to="/home" className='nav-links'>Home</NavLink>
       </li>
       {/* <li className='nav-item'>
       <NavLink to="/" className='nav-links'>Login</NavLink>
      </li> */}
      {/* <li className='nav-item'>
       <NavLink to="/delete-task" className='nav-links'>DeleteTask</NavLink>
       </li> */}
       {/* <li className='nav-item'>
       <NavLink to="/task" className='nav-links'>Tasks</NavLink>
       </li> */}
       <li className='nav-item'>
       <NavLink to="/tasks" className='nav-links'>TaskListItem</NavLink>
       </li>
       <li className='nav-item'>
       <NavLink to="/taskCreationForm" className='nav-links'>TaskCreationForm</NavLink>
       </li>
       <li className='nav-item'>
       <NavLink to="/addUser" className='nav-links'>AddUser</NavLink>
       </li>
       
       </ul>
       </div>
       </div>
    <div className='home-container'>
      
      <div className='top-panel'>
        <img src="https://img.freepik.com/free-vector/office-time-management-composition_1284-73496.jpg?size=626&ext=jpg" alt="#" />
        
        <h1>Welcome to Task Manager!</h1>
      <p>Keep track of your day-to-day tasks easily.</p>
      </div>
      <div className='bottom-panel'>
{/* 
      <h1>Welcome!</h1> */}
      <TaskCreationForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} />
      </div>
    </div>
    <button onClick={()=>redirect("/")} style={{
      position: "absolute",
      top: "10px",
      right: "10px"
    }}>Log out</button>
    </>
  );
}

export default Home;



// import { useState } from 'react'
// import { useEffect } from 'react'
// import { Login } from './login'

// function Home() {
//   const [user, setUser]=useState([])
//   useEffect(()=>{
//     fetch ("http://localhost:9292/users")
//     .then(r=>r.json())
//     .then(data=>setUser(data))
//   },[])
// console.log(user)
//   return (
//     <div className='homeContainer'>

//       <div className='description'>
//         <h1> you are home</h1>

//       </div>
//       <div className='homeImage'>
//        <p>this is your home</p>

//       </div>
//   </div>
//   )
// }

// export default Home