import React from 'react';
import classes from './Messenger.module.css';
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";


const Messenger = () => {
    return (
        <div className={classes.messenger}>
            <DialogsContainer/>
            <MessagesContainer/>
        </div>
    );
}

export default Messenger;
