import { useState } from 'react'


function UserLogin() {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
return (

<>
<div>this is user Login</div>
    <form onSubmit={()=>console.log(email)} className=" bg-blue-300 text-3xl ">
    <input type="text" className="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <p></p>
    <input type="password" className="password" placeholder="Enter your password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <p>
    </p>
    <button type="submit" className="btn" onClick={()=>{console.log(email, password)}}>Submit</button>
    </form>

    </>
)
}

export default UserLogin
