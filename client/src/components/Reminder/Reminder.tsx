import React from 'react';
import classes from './Reminder.module.css';


interface ReminderProps {
    name:  String
    description: String
    date:  String
    time: String
}


const Reminder: React.FC<ReminderProps> = props => {
    return (
        <div className={classes.Reminder}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <span><h5>{props.date}, {props.time}</h5></span>
        </div>
    );
}

export default Reminder;
