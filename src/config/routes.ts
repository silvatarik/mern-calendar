import IRoute from "../interfaces/route";
import { CalendarPage } from "../pages/CalendarPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const routePublic:IRoute[] = [
    {
        path:'/auth/login',
        name: 'Login Page',
        component: LoginPage,
        exact:true
    },
    {
        path:'/auth/register',
        name: 'Register Page',
        component: RegisterPage,
        exact:true
    }
]

export const routePrivate:IRoute[] = [
    {
        path:'/',
        name: 'Calendar Page',
        component: CalendarPage,
        exact:true
    }
]