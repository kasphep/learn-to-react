import React from 'react';
import classes from './Posts.module.css';


const AddPost = (props) => {

    const newPostElement = React.createRef();

    const addTextPost = () => {
        const postText = newPostElement.current.value;
        props.addPost(postText);
    }

    return (
        <div className={classes.addPost}>
            <div>
                <textarea ref = {newPostElement}>
                    Print text for post
                </textarea>
            </div>
            <div>
                <button onClick={addTextPost}>
                    Add post
                </button>
            </div>
        </div>
    )
}

export default AddPost;