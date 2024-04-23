import React from 'react';
import classes from "./MySkill.module.css";

const MySkill = ({skill, img, alt}) => {
    return (
        <div className={classes.skill}>
            <h2 className={classes.test}>{skill}</h2>
            <img className={classes.mySkillImage} src={img} alt={alt}/>
        </div>
    )
}
export default MySkill
