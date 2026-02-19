import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import RegisterForm from './RegisterForm'
import Profile from './Profile'
import { UserProvider } from './UserProvider'
import LoginForm from './LoginForm'

function App() {
  return (
    <>
      <UserProvider>
        <nav className="apple-nav">
          <div className="apple-nav-inner">
            <NavLink to="/profile" className="apple-nav-link">Profil</NavLink>
            <NavLink to="/login" className="apple-nav-link">Connexion</NavLink>
            <NavLink to="/" className="apple-nav-link" end>Inscription</NavLink>
          </div>
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