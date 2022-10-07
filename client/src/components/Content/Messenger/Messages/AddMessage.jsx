import React from 'react';
import classes from '../Messenger.module.css';

const AddMessage = (props) => {
    const onClickAddMessage = () => {
        props.addNewMessage();
    }

    let onMessageChange = (event) => {
        const newText = event.target.value;
        props.updateNewMessage(newText);
    }

    return (
        <div className={classes.addMessage}>
        <span>
            <textarea onChange={onMessageChange} placeholder={"Enter your message"} value={props.newMessageText}/>
        </span>
            <span>
            <button onClick={onClickAddMessage}>
                Enter
            </button>
        </span>
        </div>)
}

export default AddMessage;