import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <nav className="Navbar">
      
       <NavLink to="/home">Home</NavLink>
       <NavLink to="/">Login</NavLink>
       <NavLink to="/create-task">CreateTask</NavLink>
       <NavLink to="/task">Tasks</NavLink>
       <NavLink to="/task/:id">TaskDetail</NavLink>
       <NavLink to="/taskCreationForm">TaskCreationForm/</NavLink>
       <NavLink to="/userTest">UserTest</NavLink>
       
        
         

    </nav>
    );
  }
  
  export default Navbar;