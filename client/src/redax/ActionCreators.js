export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const ADD_MESSAGE = 'ADD-MESSAGE';

export const SET_ONE_USER = 'SET-ONE-USER';
export const FETCH_ONE_USER = 'FETCH-ONE-USER';
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

export const setOneUser = (payload) => ({
        type: SET_ONE_USER,
        payload: payload,
})

export const fetchOneUser = () => ({
        type: FETCH_ONE_USER,
})

export const setAllUser = (payload) => ({
        type: SET_ALL_USERS,
        payload: payload,
})

export const fetchAllUsers = () => ({
        type: FETCH_ALL_USERS,
})