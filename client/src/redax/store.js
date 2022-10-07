import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import settingsReducer from "./settings-reducer";


const reducers = combineReducers ({
    Profile: profileReducer,
    Messenger: messengerReducer,
    News: newsReducer,
    Music: musicReducer,
    Settings: settingsReducer
});

const store = createStore(reducers);

export default store;