import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false,
    user: null,
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState)

    return (
        // SE NAO TEMOS VALUE PODEMOS DEIXAR UM ARRAY VAZIO
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}