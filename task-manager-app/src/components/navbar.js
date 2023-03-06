import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import TaskCreationForm from './components/TaskCreationForm';
// import TaskList from './components/TaskList';
// import TaskDetail from './components/TaskDetail';
// import Home from './Home';
// import TaskCreationForm from './taskCreationForm';
// import UserTest from './UserTest';


function Navbar() {
 

    return (
      <>
        <nav className="Navbar">
          <div className='navbar-container'> 
          <div className='navLinks'>
<ul>
        {/* <li className='nav-item'>
       <NavLink to="/home" className='nav-links'>Home</NavLink>
       </li> */}
       {/* <li className='nav-item'>
       <NavLink to="/" className='nav-links'>Login</NavLink>
      </li> */}
      {/* <li className='nav-item'>
       <NavLink to="/delete-task" className='nav-links'>DeleteTask</NavLink>
       </li> */}
       {/* <li className='nav-item'>
       <NavLink to="/task" className='nav-links'>Tasks</NavLink>
       </li> */}
       {/* <li className='nav-item'>
       <NavLink to="/tasks" className='nav-links'>TaskListItem</NavLink>
       </li> */}
       {/* <li className='nav-item'>
       <NavLink to="/taskCreationForm" className='nav-links'>TaskCreationForm</NavLink>
       </li> */}
       {/* <li className='nav-item'>
       <NavLink to="/addUser" className='nav-links'>AddUser</NavLink>
       </li> */}
       
       </ul>
       </div>
       </div>
    </nav>

    </>
    );
  }
  
  export default Navbar;