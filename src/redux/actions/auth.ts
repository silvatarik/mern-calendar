import { IUser } from "../../interfaces/auth";
import { types } from "../../types/types";

export const loginAction = (email:string,password:string) => ({
    type: types.authStarLogin,
    payload:{email,password}
});

export const registerAction = (data:IUser) => ({
    type: types.authStarRegister,
    payload:data
});
