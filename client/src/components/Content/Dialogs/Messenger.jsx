import React from 'react';
import classes from './Messenger.module.css';
import {NavLink} from "react-router-dom";
import AddMessage from "./AddMessage";
import {updateNewMessageTextActionCreator} from "../ActionCreators";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Messenger = (props) => {
    const messageAlready = props.messengerData.messagesData.map (data => (<Message messageData={data}/>));
    const dialogAlready = props.messengerData.dialogsData.map (data => (<Dialog dialogData={data}/>));
    return (
        <div className={classes.messenger}>
            <div className={classes.dialogs}>
                {dialogAlready}
            </div>
            <div className={classes.messages}>
                {messageAlready}
                <AddMessage newMessageText = {props.messengerData.newMessageText} dispatch = {props.dispatch}/>
            </div>
        </div>
    );
}

export default Messenger;
