import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formschema/registerschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
function Register() {
    const Navigate=useNavigate();
    const { register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data)
    {
        console.log(data)
        alert("register success")
        Navigate("/",
        {
            state:data
        }
   ) }
    return ( 
<>

<div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4 py-8" >
    <div className="text-4xl text-center py-8">REGISTER PAGE</div>
<form    className="   flex flex-col min-h-min bg-amber-100 border-3 p-4 size-80 ml-10 my-2 py-2 border-b-black placeholder-gray-600 gap-3" onSubmit={handleSubmit(onSubmit1)}>
    <div className="caret-black size-5 text-xl " >Name:</div>
    <input className="border-2  bg-blue-50 rounded-sm " type="text" placeholder="enter your name" {...register("name")}/>
    <p>{errors.name?.message} </p>
    <div className="caret-black size-5 text-xl" >Email:</div>
    <input  className="border-2  bg-blue-50  rounded-sm" type="text" placeholder="enter your email" {...register("email")}/>
    <p>{errors.email?.message} </p>
    <div  className="caret-black size-5 text-xl">Password:</div>
    <input className="border-2  bg-blue-50 rounded-sm " type="text" placeholder="enter your password" {...register("password")}/>
    <p>{errors.password?.message} </p>
<div  className="caret-black size-5 text-xl">Age:</div>
    <input className="border-2  bg-blue-50  rounded-sm" type="number" placeholder="enter your age" {...register("age")}/>
    <p>{errors.age?.message} </p>
    <button  className="bg-green-600 ml -4  rounded-3xl"type="submit">submit</button>
    
</form>
</div>

</>
 );
}

export default Register;