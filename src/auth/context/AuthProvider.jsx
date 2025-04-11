import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
    logged: false,
    user: null
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState)

    const onLogin = async(name = '') => {
        const action = {
            type: types.login,
            payload: { name: name },
        }
        dispatch(action)
    }

    return (
        // SE NAO TEMOS VALUE PODEMOS DEIXAR UM ARRAY VAZIO
        // ISSO SERVE PARA PASSAR AS FUNCOES PARA OS OUTROS COMPONENTES FILHOS
        // E TEMOS QUE TOMAR CUIDADO PARA NAO DAR MUITO PODER PARA OS OUTROS COMPONENTES
        //! CUIDADO COM A DESESTRUTURACAO DO STATE, SE EU TIVER UMA FUNCAO CHAMADA ONLOGIN
        //! ISSO PODE ACABAR MUDANDO O VALOR DE ONLOGIN PARA O NOVO VALOR DO STATE
        <AuthContext.Provider value={{
            ...authState,
            onLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}