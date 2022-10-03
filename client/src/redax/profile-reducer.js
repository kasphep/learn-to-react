const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        state.postsData.push({
            id: "0003",
            img: "./temporaryServer/Posts/Zhnec/img.png",
            message: state.newPostText,
            likes: "0",
        });
        state.newPostText ="";
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;