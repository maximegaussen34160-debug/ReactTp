import { useContext } from "react"
import { UserContext } from "./UserProvider" 

export function Avatar() {
    const { email } = useContext(UserContext)

    if (!email) {
        return <h3>Invité</h3> 
    }

    return (
        <h3>{email}</h3>
    )
}