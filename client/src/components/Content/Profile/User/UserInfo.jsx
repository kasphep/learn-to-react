import React from 'react';
import classes from './User.module.css';

import HellaTendy from "../../../../temporaryServer/Users/001/data";
import Alchimik from "../../../../temporaryServer/Users/002/data";

const UserA = HellaTendy;

const UserInfo = () => {
    return (
        <div className={classes.user}>
            <div>
                <img className={classes.obl} src={UserA.obl}/>
            </div>
            <span>
                <img className={classes.ava} src={UserA.ava}/>
            </span>
            <span className={classes.name}>
                {UserA.name}
            </span>
        </div>
    )
}

export default UserInfo;