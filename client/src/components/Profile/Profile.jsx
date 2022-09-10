import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className = {classes.obl} src = 'example-obl.jpg'/>
            </div>
            <div>
                <img className = {classes.ava} src = 'example-ava.png'/> Hella Tendy
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;