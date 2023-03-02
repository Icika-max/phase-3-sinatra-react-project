import React from 'react';
import { useState } from 'react';

// import { isCompositeComponent } from 'react-dom/test-utils';
// import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import { Register } from './components/register';
import TaskCreationForm from './components/taskCreationForm';
// import TaskList from './components/taskList';
// import TaskDetail from './components/taskDetails';


function App() {
  const[currentform, setCurrentForm]=useState("Login")

  const toggleForm=(forName)=>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      
     {
     currentform === "Login"? <Login onformSwitch={toggleForm}/> : <Register onformSwitch={toggleForm}/>
     }
  
    <TaskCreationForm/>
   {/* <TaskList/>
   <TaskDetail/> */}

     
    </div>
  );

 }

export default App;
