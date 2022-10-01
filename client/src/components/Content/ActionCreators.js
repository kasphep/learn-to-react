const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const addPostActionCreator = () => ({
        type: ADD_POST,
})

export const updateNewPostTextActionCreator = (newText) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
})

export const updateNewMessageTextActionCreator = (newText) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText,
})

export const addMessageActionCreator = () => ({
        type: ADD_MESSAGE,
})