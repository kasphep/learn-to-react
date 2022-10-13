import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import settingsReducer from "./settings-reducer";
import createSagaMiddleware from "redux-saga";
import {profileWatcher} from "../saga/profileSaga";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers ({
    Profile: profileReducer,
    Messenger: messengerReducer,
    News: newsReducer,
    Music: musicReducer,
    Settings: settingsReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;