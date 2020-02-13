import React from 'react';
import classes from './Person.module.css';


const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <p>{props.children}</p>
        </div>
    )
};

export default person;