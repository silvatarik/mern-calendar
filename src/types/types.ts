import { authReducer } from "../redux/reducers/authReducer";

export const types = {
    /*    UI    */
    uiOpenModal:'[UI] Open Modal',
    uiCloseModal:'[UI] Close Modal',

    /*    Calendar  */
    eventSetActive:'[Event] Set Active',
    eventAddNew:'[Event] Add New',
    eventActiveClean:'[Event] Clear Active Event',
    eventEdit:'[Event] Edit Event',
    eventDelete:'[Event] Delete Event',

    /*    Auth  */
    authChecking:'[Auth] Checking',
    authCheckingFinish:'[Auth] Finish Checking',
    authStarLogin:'[Auth] Star Login',
    authLogin:'[Auth] Login',
    authStarRegister:'[Auth] Start register',
    authStartTokenRenew:'[Auth] Star token renew',
    authLogout:'[Auth] Logout'

}