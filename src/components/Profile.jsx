import { useContext } from "react"
import UserContext from "../context/UserContext"

export function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div className="text-white pt-4 ">Please login</div>

    return <div className="text-white pt-4 ">welcome {user.username}</div>
}