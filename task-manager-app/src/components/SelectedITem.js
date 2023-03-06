import React from "react";
// import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function SelectedItem({task}) {
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
      <li className='nav-item'>
       <NavLink to="/delete-task" className='nav-links'>DeleteTask</NavLink>
       </li>
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
        <div >
             <p>{task.due_date}</p>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
        </div>
        </>

    );
}

export default SelectedItem ;

