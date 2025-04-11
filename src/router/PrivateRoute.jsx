import { useContext } from "react"
import { Navigate, Route } from "react-router-dom"
import { AuthContext } from "../auth"

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)

    //* SE TA LOGADO RENDERIZA OS CHILDRES, SE NAO TIVER LOGADO QUE SIMPLISMENTE RETORNE AO LOGIN
    return (logged) ? children : <Navigate to="/login" />
}