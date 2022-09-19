import React from 'react';
import classes from './Messenger.module.css';
import {NavLink} from "react-router-dom";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Messenger = ({messengerData}) => {
    const messageAlready = messengerData.messagesData.map (data => (<Message messageData={data}/>));
    const dialogAlready = messengerData.dialogsData.map (data => (<Dialog dialogData={data}/>));
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
