import { useLocation } from "react-router-dom";
import { useState } from "react";
function Dashboard() {
       const Location=useLocation()
       const[userdata,setUserdata]=useState("   ")
       function displayData()
       {
              setUserdata(Location.state)
              console.log(userdata)
       }
   return (
       <>
       <button onClick={displayData}>button</button>
       </>
   )

}

export default Dashboard;