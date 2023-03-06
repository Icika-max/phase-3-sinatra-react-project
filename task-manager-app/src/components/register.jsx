import React from "react"
import { useNavigate } from "react-router"


export const Register=(props)=>{
    let redirect = useNavigate()
    // const [name, setName]=useState("")
    // const [email, setEmail]=useState("")
    // const [password, setPassword]= useState("")
    
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(email)
    // } 
    return(<div className="">
            <h2>Register</h2>
        
    <div className='register-user'>
        <form className="register-form" action="https://icika.onrender.com/new_user" method="post">
            <input type="name" placeholder='user email' name='email'/>
            <input type="text" placeholder='user name' name='name' />
            <input type="text" placeholder='password' name='password' />
            <button type="submit" >Register</button>
            
        </form>
    </div>
  
  <button className="link-btn" onClick={()=>redirect('/')}>Already have an account? Login here</button>

        {/* <form className="register-form" onSubmit={handleSubmit} action= "http://localhost:9292/new_user" method= 'post'>
            <label htmlFor="name">Full name</label>
            <input value={name} id="name" onChange={(e)=> setName(e.target.value)} placeholder="full name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="*******" id="password" name="name" />
            <button type="submit">Register</button>
        </form> */}
       

        {/* <button className="link-btn"  onClick={()=>redirect("/register")}>Don't have an account? Register here</button> */}
        </div>
    )
}
export default Register