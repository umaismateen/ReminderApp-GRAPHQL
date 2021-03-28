import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Toolbar.module.css';

const Toolbar: React.FC = () => {
    return (
        <header className={classes.Toolbar}>
            <h2>
                Reminders
            </h2>
            <Link to="/addReminder" className={classes.btn}>Add Reminder</Link>
        </header>
    );
}

export default Toolbar;
