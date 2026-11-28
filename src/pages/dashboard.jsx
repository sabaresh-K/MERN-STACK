import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    const[count,setCount]=useState(0)
    const[add,setAdd]=useState(0)
    // function displaydata(){
    //     setUserdata(location.state);
    //     console.log(userdata)
    // }  

   
    useEffect(()=>{
        setUserdata(location.state)
        console.log(userdata)
    },[count,add])

    return ( 
        <>
            <div>{userdata.username}</div>
           <div>{userdata.password}</div>
           <button onClick={()=>setCount(count+1)}>count</button>
           <button onClick={()=>setAdd(add+1)}>add</button>
           

        </>
     );
}

export default Dashboard;