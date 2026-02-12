import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink to="/">Inscription</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </>
  )
}

export default App
