import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import settingsReducer from "./settings-reducer";

let store = {
    _state: {
        Header: {},
        Navbar: {},
        Content: {
            Profile: {
                newPostText: "",
                postsData: [
                    {
                        id: "0001",
                        img: "./temporaryServer/MyPosts/Veshiy/img.png",
                        message: "My first pictures, Veshiy!",
                        likes: "10",
                    },
                    {
                        id: "0002",
                        img: "./temporaryServer/MyPosts/Demon/img.png",
                        message: "My second result of working. You likes Demon?",
                        likes: "2",
                    }
                ],
                userData: [
                    {
                        id: "001",
                        obl: "./temporaryServer/Users/001/obl.jpg",
                        ava: "./temporaryServer/Users/001/ava.png",
                        name: "Hella Tendy",
                    },
                    {
                        id: "002",
                        obl: './obl.jpg',
                        ava: './ava.png',
                        name: 'Alchimik',
                    }
                ],
            },
            Messenger: {
                dialogsData: [
                    {
                        id: "001",
                        name: "Hella",
                    },
                    {
                        id: "002",
                        name: "Alchymick",
                    }
                ],
                messagesData: [
                    {
                        message: "Hi!"
                    },
                    {
                        message: "Hi?"
                    },
                ],
                newMessageText: "",
            },
            News: {},
            Music: {},
            Settings: {}
        },
    },
    _callSubscribe() {
        console.log('State change');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        this._state.Content.Profile = profileReducer(this._state.Content.Profile, action);
        this._state.Content.Messenger = messengerReducer(this._state.Content.Messenger, action);
        this._state.Content.News = newsReducer(this._state.Content.News, action);
        this._state.Content.Music = musicReducer(this._state.Content.Music, action);
        this._state.Content.Settings = settingsReducer(this._state.Content.Settings, action);
        this._callSubscribe(this._state);
    }
}

export default store;
window.store = store;