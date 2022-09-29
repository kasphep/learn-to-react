import React from 'react';
import classes from './Posts.module.css';


const AddPost = (props) => {

    const newPostElement = React.createRef();

    const addTextPost = () => {
        const postText = newPostElement.current.value;
        props.addPost(postText);
    }

    let onPostChange = () => {
        const newText = newPostElement.current.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className={classes.addPost}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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