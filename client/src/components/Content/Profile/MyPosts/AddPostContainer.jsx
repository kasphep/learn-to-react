import React from 'react';
import classes from './Posts.module.css';
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from '../../../../redax/ActionCreators'
import AddPost from "./AddPost";
import {useDispatch, useSelector} from "react-redux";

const AddPostContainer = () => {
    const dispatch = useDispatch();
    const newPostText = useSelector(state => state.Profile.newPostText);

    const addNewPost = () => {
        const action = addPostActionCreator();
        dispatch(action);
    }

    const updateNewPostText = (newText) => {
        const action = updateNewPostTextActionCreator(newText);
        dispatch(action);
    }

    return <AddPost addNewPost={addNewPost} updateNewPostText={updateNewPostText} newPostText={newPostText}/>
}

export default AddPostContainer;