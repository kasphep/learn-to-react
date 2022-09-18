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
];

const dialogsData = [
    {
        id: "001",
        name: "Hella",
    },
    {
        id: "002",
        name: "Alchymick",
    }
];


const messageAlready = messagesData.map (data => (<Message messageData={data}/>));
const dialogAlready = dialogsData.map (data => (<Dialog dialogData={data}/>));


const Messenger = () => {
    return (
        <div className={classes.messenger}>
            <div className={classes.dialogs}>
                {dialogAlready}
            </div>
            <div className={classes.messages}>
                {messageAlready}
            </div>
        </div>
    );
}

export default Messenger;
