import { useState } from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Project from './pages/project';
import LoginU from './pages/login';
import Task from './pages/task';
import Team from './pages/team';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calendar from './pages/calendar';
import Settings from './pages/settings';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginU/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/task" element={<Task/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/clients" element={<Clients/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/calendar" element={<Calendar/>}/>
    <Route path="/settings" element={<Settings/>}/>
    
  </Routes>
  </BrowserRouter>
}

export default App;
