import { useContext } from "react"
import { authContext } from "../Provider/AuthPovider"

const UseAuthContext = () => {
    const authData = useContext(authContext)
    return authData
}

export default UseAuthContext