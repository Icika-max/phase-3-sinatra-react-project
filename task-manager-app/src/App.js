import React from 'react';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { isCompositeComponent } from 'react-dom/test-utils';
// import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
// import { Register } from './components/register';
import TaskCreationForm from './components/taskCreationForm';
// import AddUser from './components/AddUser';
import Home from './components/Home';
import TaskList from './components/taskList';
// import TaskDetail from './components/taskDetails';
import Navbar from './components/navbar';
import Register from './components/register';
import TaskListItem from './components/taskListItem';
import AddUser from './components/AddUser';
// import DeleteTask from './components/DeleteTask';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function handleLogin() {
  //   // your login logic here
  //   setIsLoggedIn(true);
  // }

  // function handleLogout() {
  //   // your logout logic here
  //   setIsLoggedIn(false);
  // }
  // const[currentform, setCurrentForm]=useState("Login")

  // const toggleForm=(forName)=>{
  //   setCurrentForm(forName)
  // }
  return (
    <div className="App">
     
          {/* {isLoggedIn ? (
        <Navbar onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
   

      
     {/* {
     currentform === "Login"? <Login onformSwitch={toggleForm}/> : <Register onformSwitch={toggleForm}/>
     } */}
  
    {/* <TaskCreationForm/>
    <UserTest/> */}
   {/* <TaskList/>
   <TaskDetail/> */}

<BrowserRouter>
<Navbar/>
         <Routes>
       <Route exact path="/" element={<Login/>} />
       <Route path="/home" element={<Home/>} />
          {/* <Route path="/delete-task" element={<DeleteTask/>}/> */}
          <Route path="/tasks" element={<TaskList/>} />
          <Route path="/task/:id" element={<TaskListItem/>} />
          <Route path="/taskCreationForm" element={<TaskCreationForm/>} />
          <Route path="/adduser" element={<AddUser/>} />
          <Route path="/register" element={<Register/>} />

     </Routes> 
       </BrowserRouter> 

     
    </div>
  );

 }

export default App;
