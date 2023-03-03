import React, {useState} from "react"
// import { Register } from "./register"
import { useNavigate } from "react-router"


export const Login=(props)=>{
    let redirect = useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
    }
    // const[currentform, setCurrentForm]=useState("Login")

    // const toggleForm=(forName)=>{
    //   setCurrentForm(forName)
    // }
    return(
    <>
     {/* {
     currentform === "Login"? <Login onformSwitch={toggleForm}/> : <Register onformSwitch={toggleForm}/>
     } */}
        <div className="auth-form-container">
           
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit} action="http://localhost:9292/new_user" method="post">
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="*******" id="password" name="name" />
            <button type="submit">Login</button>
        </form>
        <button className="link-btn"  onClick={()=>redirect("/register")}>Don't have an account? Register here</button>
        </div>
        </>
    )
}