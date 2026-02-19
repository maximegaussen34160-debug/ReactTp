import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

import LoginForm from './LoginForm'

function App() {
  

  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink to="/login">Connexion</NavLink>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        
      </Routes>
    </>
  )
}

export default App