import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { Login } from './login'

function Home() {
//   const [user, setUser]=useState([])
//   useEffect(()=>{
//     fetch ("http://localhost:9292/users")
//     .then(r=>r.json())
//     .then(data=>setUser(data))
//   },[])
// console.log(user)
  return (
    <div className='homeContainer'>

      <div className='description'>
        <h1> you are home</h1>

      </div>
      <div className='homeImage'>
       <p>this is your home</p>

      </div>
  </div>
  )
}

export default Home