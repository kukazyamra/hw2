import React from 'react';
import classes from './ProfileCard.module.css'

const ProfileCard = ({img, name, alt}) => {
    return (
        <div className={classes.profile}>

            <img className={classes.avatar} src={img} alt={alt}/>
            <p>{name}</p>
        </div>
    )
}
export default ProfileCard;