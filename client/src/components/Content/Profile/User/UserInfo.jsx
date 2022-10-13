import React from 'react';
import classes from './User.module.css';


const UserInfo = ({userInfoData, setUsers}) => {
    return (
        <div className={classes.user}>
            <div>
                <img className={classes.obl} src={userInfoData.obl}/>
            </div>
            <span>
                <img className={classes.ava} src={userInfoData.ava}/>
            </span>
            <span className={classes.name}>
                {userInfoData.name}
            </span>
            <button onClick={setUsers}> setUsers</button>
        </div>
    )
}

export default UserInfo;