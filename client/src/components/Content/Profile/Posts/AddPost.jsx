import React from 'react';
import classes from './Posts.module.css';


const AddPost = (props) => {

    const newPostElement = React.createRef();

    const addNewPost = () => {
        const postText = newPostElement.current.value;
        const action = {
            type: 'ADD-POST',
        }
        props.dispatch(action);
    }

    let onPostChange = () => {
        const newText = newPostElement.current.value;
        const action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: newText,
        }
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