import { types } from "../../types/types"

export const uiOpenModal  = (action:string) =>({
    'type':types.uiOpenModal,
    'payload':action
});

export const uiCloseModal  = () =>({
    'type':types.uiCloseModal
});