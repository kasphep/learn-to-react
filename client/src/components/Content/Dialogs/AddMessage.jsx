import React from 'react';
import classes from './Messenger.module.css';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../ActionCreators'

const AddMessage = (props) => {
    const addNewMessage = () => {
        const action = addMessageActionCreator();
        props.dispatch(action);
    }

    let onMessageChange = (event) => {
        const newText = event.target.value;
        const action = updateNewMessageTextActionCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={classes.addMessage}>
        <span>
            <textarea onChange={onMessageChange} placeholder={"Enter your message"} value={props.newMessageText}/>
        </span>
            <span>
            <button onClick={addNewMessage}>
                Enter
            </button>
        </span>
        </div>)
}

export default AddMessage;