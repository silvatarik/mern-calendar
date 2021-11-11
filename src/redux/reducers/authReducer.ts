import IAction from "../../interfaces/action"
import { types } from "../../types/types"

const initialstate = {}

export const authReducer = (state = initialstate, action: IAction) => {
    
    switch (action.type) {

        case types.authLogin:
            console.log(action)
            return {
                ...state,user:action.payload
            }

        case types.authProfile:
            return {
                ...state,user:action.payload
            }

        default:
            return state;
    }
}

