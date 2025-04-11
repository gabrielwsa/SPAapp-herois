import { types } from "../types/types";

//! NAO CHAME O LOCALSTORAGE NO REDUCER, CHAME NO PROVIDER
//! O REDUCER É RESPONSAVEL POR MUDAR O STATE E SOMENTE E APENAS ISSO
export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            }
        case types.logout:
            return {
                logged: false,
            }
        default:
            return state;
    }
}