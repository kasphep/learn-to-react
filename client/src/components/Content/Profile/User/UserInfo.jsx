import React from 'react';
import classes from '../Profile.module.css';

import HellaTendy from "../../../../temporaryServer/Users/HellaTendy/data";
import Alchimik from "../../../../temporaryServer/Users/Alchimik/data";

const UserA = HellaTendy;

const UserInfo = () => {
    return (
        <div>
            <div>
                <img className = {classes.obl} src = {UserA.obl}/>
            </div>
            <span>
                <img className = {classes.ava} src = {UserA.ava}/>
            </span>
            <span className = {classes.name}>
                {UserA.name}
            </span>
        </div>
    )
}

export default UserInfo;