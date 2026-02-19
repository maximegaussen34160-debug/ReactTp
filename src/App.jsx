import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './RegisterForm'

import LoginForm from './LoginForm'

function App() {
  

  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>

        <NavLink to="/login">Connexion</NavLink>
        <NavLink to="/">Inscription</NavLink>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<RegisterForm />} />
        

      </Routes>
    </>
  )
}

export default App