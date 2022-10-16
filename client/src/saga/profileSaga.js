import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_ALL_USERS, FETCH_ONE_USER, setAllUser, setOneUser} from "../redax/ActionCreators";

const fetchUsersFromAPI = () => fetch('http://localhost:4444/api/user/getAll');
const fetchUserFromAPI = () => fetch('http://localhost:4444/api/user/1');


function* fetchOneUserWorker() {
    const oneUsersData = yield call((fetchUserFromAPI));
    const oneUsersJSON = yield call(() => new Promise(res => res(oneUsersData.json())));
    yield put(setOneUser(oneUsersJSON));
}

function* fetchAllWorker() {
    const allUsersData = yield call(fetchUsersFromAPI);
    const allUsersJSON = yield call(() => new Promise(res => res(allUsersData.json())));
    yield put(setAllUser(allUsersJSON));
}


export function* profileWatcher() {
    yield takeEvery(FETCH_ALL_USERS, fetchAllWorker);
    yield takeEvery(FETCH_ONE_USER, fetchOneUserWorker);
}