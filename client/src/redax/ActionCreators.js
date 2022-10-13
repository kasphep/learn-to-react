export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const ADD_MESSAGE = 'ADD-MESSAGE';

export const GET_ONE_USER = 'GET-ONE-USER';
export const SET_ALL_USERS = 'SET-ALL-USERS';
export const FETCH_ALL_USERS = 'FETCH-ALL-USERS';

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

export const getOneUser = (id) => ({
        type: GET_ONE_USER,
})

export const setAllUser = (payload) => ({
        type: SET_ALL_USERS,
        payload: payload,
})

export const fetchAllUsers = () => ({
        type: FETCH_ALL_USERS,
})