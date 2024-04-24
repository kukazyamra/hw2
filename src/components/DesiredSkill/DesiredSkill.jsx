import React from 'react';
import classes from './DesiredSkill.module.css'

const DesiredSkill = ({skill}) => {
    return (
        <div className={classes.skill}>
            <h4>{skill}</h4>
        </div>
    )
}

export default DesiredSkill