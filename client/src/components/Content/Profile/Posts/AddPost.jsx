import React from 'react';
import classes from './Posts.module.css';
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from '../../ActionCreators'

const AddPost = (props) => {
    const addNewPost = () => {
        const action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = (event) => {
        const newText = event.target.value;
        const action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={classes.addPost}>
            <div>
                <textarea onChange={onPostChange} placeholder={"Enter text for your post"} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addNewPost}>
                    Add post
                </button>
            </div>
        </div>
    )
}

export default AddPost;