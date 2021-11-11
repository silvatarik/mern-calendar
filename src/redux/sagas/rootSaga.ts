import { all } from "@redux-saga/core/effects";
import authUser from "./authSaga";

export default function* rootSaga(){
    yield all([
        authUser()
    ]);
}