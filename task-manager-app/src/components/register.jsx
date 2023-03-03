import React, { useState } from "react"

export const Register=(props)=>{
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]= useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
    } 
    return(<div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit} action= "http://localhost:9292/new_user" method= 'post'>
            <label htmlFor="name">Full name</label>
            <input value={name} id="name" onChange={(e)=> setName(e.target.value)} placeholder="full name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="*******" id="password" name="name" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={()=>props.onformSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}