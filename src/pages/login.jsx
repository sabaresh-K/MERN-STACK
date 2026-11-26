import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginU() {
const[username,setEmail]=useState("");
const[password,setPassword]=useState("");
const[Formdata,setFormdata]=useState({
    username:" ",
    password:" "
})
const Navigate=useNavigate()
function handlechange(e)
{
    e.preventDefault(),
    setFormdata({
    ...Formdata,
    [e.target.name]:e.target.value
})
}
const formsubmit = (e) => {
    e.preventDefault();
    Navigate("/dashboard")
    alert("login successful")
    console.log(Formdata);
};
return (

<>
    <form onSubmit={formsubmit} className="form">
    <input type="text" className="username" placeholder="Enter your email"  name="username" required  onChange={handlechange} />
    <p></p>
    <input type="password" className="password" placeholder="Enter your password"  name="password" required  onChange={handlechange}/>
    <p>
    </p>
    <button type="submit" className="btn">Submit</button>
    </form>

    </>
)
}

export default LoginU
