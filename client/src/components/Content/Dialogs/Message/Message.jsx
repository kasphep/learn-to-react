import React from 'react';
import classes from './Message.module.css';
import {NavLink} from "react-router-dom";

const Message = ({messageData}) => {
    return (
        <div className={classes.message}>
            {messageData.message}
        </div>
    );
}

export default Message;
