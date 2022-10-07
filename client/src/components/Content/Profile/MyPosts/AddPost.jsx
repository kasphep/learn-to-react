import React from 'react';
import classes from './Posts.module.css';

const AddPost = (props) => {
    const onClickAddPost = () => {
        props.addNewPost();
    }

    let onPostChange = (event) => {
        const newText = event.target.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className={classes.addPost}>
            <textarea onChange={onPostChange} placeholder={"Enter text for your post"} value={props.newPostText}/>
            <button onClick={onClickAddPost}>
                Add post
            </button>
        </div>
    )
}

export default AddPost;