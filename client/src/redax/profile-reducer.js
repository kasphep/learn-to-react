export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_ONE_USER = 'SET-ONE-USER';
export const SET_ALL_USERS = 'SET-ALL-USERS';


const defaultState = {
    newPostText: "",
    postsData: [
        {
            id: "0",
            img: "./defaultPict/Profile/post.png",
            message: "Download...",
            likes: "Download...",
        }
    ],
    userData: [
        {
            id: "0",
            obl: "./defaultPict/Profile/obl.png",
            ava: "./defaultPict/Profile/ava.png",
            name: "Download...",
        }
    ],
};

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_USERS: {
            console.log(action.payload);
            return state;
        }
        case SET_ONE_USER: {
            console.log(action.payload);
            return state;
        }
        case ADD_POST: {
            state.postsData.push({
                id: "0003",
                img: "./temporaryServer/Posts/Zhnec/img.png",
                message: state.newPostText,
                likes: "0",
            });
            state.newPostText = "";
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
}

export default profileReducer;