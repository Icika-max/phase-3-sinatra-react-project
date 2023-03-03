import React, { useState } from 'react';
import TaskCreationForm from './taskCreationForm';
import TaskList from './taskList';

function Home({ user }) {
  
  const [tasks, setTasks] = useState([]);

  function handleTaskSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <div>
      <div>
        <img src="https://img.freepik.com/free-vector/office-time-management-composition_1284-73496.jpg?size=626&ext=jpg" alt="#" />
      </div>
      <h1>Welcome!</h1>
      <TaskCreationForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} />
    </div>
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