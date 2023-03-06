import React, {useState, useEffect} from "react"
// import { Register } from "./register"
import { useNavigate } from "react-router"


export const Login=({props})=>{


    const [user, setUser]=useState([])
  useEffect(()=>{
    fetch ("https://icika.onrender.com/users")
    .then(r=>r.json())
    .then(data=>setUser(data.data))
  },[])
  console.log(user)

    let redirect = useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
    }
    function handleLogin(){
        const userExist= user.find((r)=>r.email ===email)

        if (userExist){
            console.log("testing")
            redirect ("/home")
        
        }
        else{
            console.log("not exists")
            alert("invalid email or password")
        }

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
        <form className="login-form" onSubmit={handleSubmit} action="https://icika.onrender.com/login" method="post">
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
            <label htmlFor="password">password</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="*******" id="password" name="password" required />
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        <button className="link-btn"  onClick={()=>redirect("/register")}>Don't have an account? Register here</button>
        </div>
        </>
    )
}