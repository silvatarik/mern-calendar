
export interface IUser{
    name:string;
    email:string;
    token?:string;
    password?:string;
}

export interface IAuth {
    user:IUser
}