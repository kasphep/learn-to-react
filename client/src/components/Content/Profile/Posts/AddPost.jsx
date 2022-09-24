import React from 'react';
import classes from './Posts.module.css';


const newPostElement = React.createRef();

const addPost = () => {
    const postText = newPostElement.current.value;
    alert (postText);
}

const AddPost = () => {
    return (
        <div className={classes.addPost}>
            <div>
                <textarea ref = {newPostElement}>
                    Print text for post
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
        </div>
    )
}

export default AddPost;