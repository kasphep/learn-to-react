const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

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
                        img: "./temporaryServer/Posts/Veshiy/img.png",
                        message: "My first pictures, Veshiy!",
                        likes: "10",
                    },
                    {
                        id: "0002",
                        img: "./temporaryServer/Posts/Demon/img.png",
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
        if (action.type === ADD_POST) {
            this._state.Content.Profile.postsData.push({
                id: "0003",
                img: "./temporaryServer/Posts/Zhnec/img.png",
                message: this._state.Content.Profile.newPostText,
                likes: "0",
            });
            this.dispatch({
                type: UPDATE_NEW_POST_TEXT,
                newText: "",
            });
            this._callSubscribe(this._state);
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.Content.Profile.newPostText = action.newText;
            this._callSubscribe(this._state);
        }
        if (action.type === ADD_MESSAGE) {
            this._state.Content.Messenger.messagesData.push({
                message: this._state.Content.Messenger.newMessageText,
            })
            this.dispatch({
                type: UPDATE_NEW_MESSAGE_TEXT,
                newText: "",
            });
            this._callSubscribe(this._state);
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.Content.Messenger.newMessageText = action.newText;
            this._callSubscribe(this._state);
        }
    }
}

export default store;
window.store = store;