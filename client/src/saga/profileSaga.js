import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_ALL_USERS, GET_ONE_USER, setAllUser} from "../redax/ActionCreators";

const fetchUsersFromAPI = () => fetch('http://localhost:4444/api/user/getAll');


function* fetchOneUserWorker(id) {

}

function* fetchAllWorker() {
    const allUsersData = yield call(fetchUsersFromAPI);
    const allUsersJSON = yield call(() => new Promise(res => res(allUsersData.json())));
    yield put(setAllUser(allUsersJSON));
}


export function* profileWatcher() {
    yield takeEvery(FETCH_ALL_USERS, fetchAllWorker);
}