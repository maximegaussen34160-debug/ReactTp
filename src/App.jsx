import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './RegisterForm'
import Profile from './Profile'
import { UserProvider } from './UserProvider'
import LoginForm from './LoginForm'

function App() {


  return (
    <>
      <UserProvider>
        
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink to="/profile">Profil</NavLink>
          <NavLink to="/login">Connexion</NavLink>
          
          <NavLink to="/">Inscription</NavLink>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<RegisterForm />} />

        </Routes>
      </UserProvider>
    </>
  )
}

export default App