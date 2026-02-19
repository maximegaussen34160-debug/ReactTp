import { useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import { UserContext } from './UserProvider'
import { useContext } from 'react'

export default function Profile() {
    let navigate = useNavigate();
    const { email, login, logout } = useContext(UserContext)

    return (
        <div>
            {email !== null
                ? <button onClick={logout}>Déconnexion</button>
                : <p></p>

            }

            <h2>Profil utilisateur</h2>
            <Avatar />
        </div>
    )
}