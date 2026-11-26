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
        Navigate("/")
    }
    return ( 
<>
<form onSubmit={handleSubmit(onSubmit1)}>
    <input type="text" placeholder="enter your name" {...register("name")}/>
    <p>{errors.name?.message} </p>
    <input type="text" placeholder="enter your email" {...register("email")}/>
    <p>{errors.email?.message} </p>
    <input type="text" placeholder="enter your password" {...register("password")}/>
    <p>{errors.password?.message} </p>
    <input type="number" placeholder="enter your age" {...register("age")}/>
    <p>{errors.age?.message} </p>
    <button type="submit">submit</button>
    
</form>
</>
 );
}

export default Register;