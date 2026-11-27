import { useState } from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Project from './pages/project';

import Task from './pages/task';
import Team from './pages/team';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calendar from './pages/calendar';
import Settings from './pages/settings';
import Register from './pages/register';
import Login from './pages/login';
import AdminDashboard from './pages/ADMIN/admindashboard';
import AdminDetails from './pages/ADMIN/adminDetails';
import AdminSettings from './pages/ADMIN/adminsettings';
import Admin from './pages/ADMIN/adminlayout';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/task" element={<Task/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/clients" element={<Clients/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/calendar" element={<Calendar/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/admin" element={<Admin/>}>
      <Route path="dashboard" element={<AdminDashboard/>}/>
      <Route path="details" element={<AdminDetails/>}/>
      <Route path="settings" element={<AdminSettings/>}/>
    </Route>
    
  </Routes>
  </BrowserRouter>
}

export default App;
