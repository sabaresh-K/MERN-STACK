import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <div class="admin page">
            <h2 class="admin-header">ADMIN PAGE</h2>
            <nav class="navigation-bar">
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/details">Details</Link>
                <Link to="/admin/settings">Settings</Link>
             </nav>
             <Outlet />
        </div>
     );
}

export default Admin;