import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
    logged: false,
    user: null
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        //! O operador !! é usado para converter um valor em booleano
        //! O primeiro ! converte o valor para o oposto booleano
        //! O segundo ! converte de volta para o valor booleano original
        //! Exemplo: 
        //! - !!null -> !true -> false
        //! - !!'user' -> !false -> true
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    const onLogin = async(name = '') => {
        const user = { name }
        const action = {
            type: types.login,
            payload: user,
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const onLogout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout
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
            onLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}