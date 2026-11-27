import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login() {
  //const[email, setEmail] = useState("")
  //const[pass, setPass] = useState("")
  const Navigate = useNavigate();
const location=useLocation()
  const[Logindata, setLogindata] = useState({
    username:"",
    password:""
  })
 const registerdata=location.state
  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...Logindata,
      [e.target.name]:e.target.value
    })
  }

  const handlesubmit = (event)=>{
    event.preventDefault();
   
  console.log(registerdata)
  console.log(Logindata)
  if(registerdata.name===Logindata.username && registerdata.password===Logindata.password)
  {
    alert ("Login Successful")
    Navigate("/dashboard",
    {
      state:Logindata
    }
    
   ) }
    else{
      alert("please enter the valid credential")
    }
  }
    return ( 
    <>
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-5xl text-center py-8">Login</div>
        <form  className="border-2 gap-4  bg-cyan-100 flex flex-col  ml-2 py-2 p-4 "onSubmit={handlesubmit}>
          <div className="text-2xl">UserName:</div>
        <input  className="bg-white border-2 border-black" type="text" required placeholder="Enter your username" name="username" value={Logindata.username} onChange={handlechange}/>
        <div className="text-2xl">Password:</div>
        <input className="bg-white border-2 border-black" type="password" required placeholder="Enter your password" name="password" onChange={handlechange }/>
        <button  className="bg-green-400 rounded-3xl" type="submit" >Submit</button>
      </form>
      </div>
      {/*}
      <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
      <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button>
      */}
      
      
    </>
    
     );
}

export default Login;