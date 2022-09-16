import React from 'react';
import classes from './Messenger.module.css';
import {NavLink} from "react-router-dom";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const messagesData = [
    {
        message: "Hi!"
    },
    {
        message: "Hi?"
    }
]


const dialogsData = [
    {
        id: "001",
        name: "Hella",
    },
    {
        id: "002",
        name: "Alchymick",
    }
]


const Messenger = () => {
    return (
        <div className={classes.messenger}>
            <div className={classes.dialogs}>
                <Dialog dialogData={dialogsData}/>
            </div>
            <div className={classes.messages}>
                <Message messageData={messagesData}/>
            </div>
        </div>
    );
}

export default Messenger;
