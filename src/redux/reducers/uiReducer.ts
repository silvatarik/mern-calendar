import IAction from '../../interfaces/action'
import { types } from '../../types/types';

const initialState = {
    modalOpen: false,
    action:'',
    message:''
}

export const uiReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state, modalOpen: true,action:action.payload
            }

        case types.uiCloseModal:
            return {
                ...state, modalOpen: false,action:''
            }

        default:
            return state;
    }
}