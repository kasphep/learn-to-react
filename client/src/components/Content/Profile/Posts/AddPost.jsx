import React from 'react';
import classes from './Posts.module.css';
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from './addPostActionCreators'

const AddPost = (props) => {

    const newPostElement = React.createRef();

    const addNewPost = () => {
        const postText = newPostElement.current.value;
        const action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        const newText = newPostElement.current.value;
        const action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={classes.addPost}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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