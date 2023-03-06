import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

function AddUser() {
  let redirect= useNavigate()
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
    <div className='add-user'>
        <form action="https://icika.onrender.com/new_user" method="post">
            <input type="name" placeholder='user email' name='email'/>
            <input type="text" placeholder='user name' name='name' />
            <input type="text" placeholder='password' name='password' />
            <button type="submit" onClick={()=>redirect("/home")} >new user</button>
            
        </form>
    </div>
    </>
  )
}

export default AddUser


