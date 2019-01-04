import React from 'react';

// import './Person.css'; // ohne CSS Modules
import classes from './Person.css'; // mit CSS Modules

const person = (props) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;