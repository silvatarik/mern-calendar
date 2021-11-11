import IAction from "../../interfaces/action"

const initialstate = {
    checking:true
}

export const authReducer = (state = initialstate, action:IAction) =>{
    switch (action.type) {

        default:
            return state;
    }
}

