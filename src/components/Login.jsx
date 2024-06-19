import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

export function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(UserContext)


    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            
            <input type="text"
            className="mt-5 mb-3 p-1 rounded-lg"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"/>
            <br />
            <input type="text"
            className="mb-3 p-1 rounded-lg"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"/>
            <br />
            <button className="py-2 bg-blue-500 border border-solid border-black mt-4 " onClick={handleSubmit}>Submit</button>
        </div>
    )
}