import React from 'react'

function AddUser() {
  return (
    <div>
        <form action="http://localhost:9292/new_user" method="post">
            <input type="name" placeholder='user email' name='email'/>
            <input type="text" placeholder='user name' name='name' />
            <button type="submit">new user</button>
            
        </form>
    </div>
  )
}

export default AddUser


