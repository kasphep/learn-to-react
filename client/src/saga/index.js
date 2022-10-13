import {all} from "redux-saga/effects";
import {profileWatcher} from "./profileSaga";

export function* rootWatcher () {
    yield all([profileWatcher()]);
}