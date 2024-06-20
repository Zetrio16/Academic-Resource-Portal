
import { useJwt } from "react-jwt";


export function Redirect()
{
    const token = localStorage.getItem("token")
    const { decodedToken, isExpired } = useJwt(token);
    if(isExpired || !token)
    {
        return false
    }
    return true
    
}