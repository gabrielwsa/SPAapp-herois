import { useContext } from "react"
import { Navigate, Route, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation()
    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    //* SE TA LOGADO RENDERIZA OS CHILDRES, SE NAO TIVER LOGADO QUE SIMPLISMENTE RETORNE AO LOGIN
    return (logged) ? children : <Navigate to="/login" />
}