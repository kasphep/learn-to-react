import React from 'react';
import classes from './Messenger.module.css';

const Messenger = () => {
    return (
        <div className={classes.messenger}>
            <div className={classes.dialogs}>
                <div className={classes.dialog_item + ' ' + classes.active}>
                    Hella
                </div>
                <div className={classes.dialog_item}>
                    Alchimik
                </div>
                <div className={classes.dialog_item}>
                    Dmitry
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message_item}>
                    Hi!
                </div>
                <div className={classes.message_item}>
                    Hi?
                </div>
                <div className={classes.message_item}>
                    Yeah, Hi!
                </div>
            </div>
        </div>
    );
}

export default Messenger;
