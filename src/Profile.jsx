import { useContext } from 'react'
import { UserContext } from './UserProvider'
import './Profile.css'

export default function Profile() {
  const { email, login, logout } = useContext(UserContext)

  // Générer une couleur de gradient basée sur l'email
  const getGradient = (mail) => {
    if (!mail) return 'linear-gradient(135deg, #667eea, #764ba2)'
    const hash = [...mail].reduce((acc, c) => acc + c.charCodeAt(0), 0)
    const hue = hash % 360
    return `linear-gradient(135deg, hsl(${hue}, 70%, 55%), hsl(${(hue + 40) % 360}, 80%, 45%))`
  }

  const getInitial = (mail) => {
    if (!mail) return '?'
    return mail.charAt(0).toUpperCase()
  }

  return (
    <div className="apple-page">
      <div className="apple-card">

        <div className="profile-avatar-wrapper">
          <div
            className="profile-avatar-circle"
            style={{ background: getGradient(email) }}
          >
            <span className="profile-avatar-initial">
              {getInitial(email)}
            </span>
          </div>
        </div>

        <h2 className="apple-title">Profil utilisateur</h2>
        <p className="apple-subtitle">
          {email ?? 'Non connecté'}
        </p>

        {email !== null && (
          <>
            <div className="profile-info">
              <div className="profile-row">
                <span className="profile-label">Email</span>
                <span className="profile-value">{email}</span>
              </div>
            </div>

            <button className="apple-submit" onClick={logout}>
              Déconnexion
            </button>
          </>
        )}

        {email === null && (
          <button className="apple-submit" onClick={login}>
            Se connecter
          </button>
        )}

        <div className="apple-footer">
          Gérez votre compte et vos préférences.
        </div>
      </div>
    </div>
  )
}