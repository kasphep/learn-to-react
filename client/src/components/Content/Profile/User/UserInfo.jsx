import React from 'react';
import classes from './User.module.css';


const userData = [
    {
        id: "001",
        obl: "./temporaryServer/Users/001/obl.jpg",
        ava: "./temporaryServer/Users/001/ava.png",
        name: "'Hella Tendy",
    },
    {
        id: "002",
        obl: './obl.jpg',
        ava: './ava.png',
        name: 'Alchimik',
    }
];


const UserInfo = () => {
    return (
        <div className={classes.user}>
            <div>
                <img className={classes.obl} src={userData[0].obl}/>
            </div>
            <span>
                <img className={classes.ava} src={userData[0].ava}/>
            </span>
            <span className={classes.name}>
                {userData[0].name}
            </span>
        </div>
    )
}

export default UserInfo;