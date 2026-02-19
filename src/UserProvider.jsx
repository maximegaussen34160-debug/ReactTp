import { createContext, useMemo, useState } from "react"

export const UserContext = createContext(null)

export function UserProvider({ children })
{
    const [email, setEmail] = useState(null)

    function login(email)
    {
        setEmail({ email })
    }

    function logout()
    {
        setEmail(null)
    }

    const valeur = useMemo(() => // rassemble utilisateur, login, logout
    {
        return { email, login, logout }
    }, [email]) // [utilisateur] = liste de dépendances, à chaque changement, on re-return

    return (
        <UserContext.Provider value={valeur}>
            {children}
        </UserContext.Provider>
    )
}