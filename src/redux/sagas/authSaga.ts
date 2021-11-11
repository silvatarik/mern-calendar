import { put, takeEvery } from 'redux-saga/effects'
import IAction from '../../interfaces/action';
import { types } from '../../types/types';


function* loginUser(action: IAction) {
    try {
        
        yield put({ type: types.authLogin, payload: action.payload });
    } catch (e) {
        console.log(e)
    }
}

function* RegisterUser(action: IAction) {
    try {
        console.log('Registro realizado')
    } catch (e) {
        console.log(e)
    }
}

export default function* authUser() {
    yield takeEvery(types.authStarLogin, loginUser);
    yield takeEvery(types.authStarRegister, RegisterUser);
}