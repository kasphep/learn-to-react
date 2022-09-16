import React from 'react';
import classes from './Messenger.module.css';
import {NavLink} from "react-router-dom";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const dialogA = {
    id: "001",
    name: "Hella Tendy",
};
const dialogB = {
    id: "002",
    name: "Alchymick",
};


const messageA = {
    message: "Hi!"
};
const messageB = {
    message: "Hi?"
};


const Messenger = () => {
    return (
        <div className={classes.messenger}>
            <div className={classes.dialogs}>
                <Dialog dialogData={dialogA}/>
                <Dialog dialogData={dialogB}/>
            </div>
            <div className={classes.messages}>
                <Message messageData={messageA}/>
                <Message messageData={messageB}/>
            </div>
        </div>
    );
}

export default Messenger;
