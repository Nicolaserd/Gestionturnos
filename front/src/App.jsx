import { useState } from 'react'
import MisTurnos from "./views/MisTurnos"
import './App.css'
import LoginForm from './views/LoginForm'
import Home from './views/Home'
import RegistrationForm from './views/RegistrationForm.jsx'
import NavBar from './components/NavBar.jsx'
import {  Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/MisTurnos" element={<MisTurnos/>}/>       
      <Route path="/LoginForm" element={<LoginForm/>}/>  
      <Route path="/RegistrationForm" element={<RegistrationForm/>}/>   
     </Routes>
    </>
  )
}

export default App
