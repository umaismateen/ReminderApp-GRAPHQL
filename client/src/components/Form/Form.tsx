import React from 'react';
import classes from './Form.module.css';

interface FormProps {
    submit: (event: React.FormEvent) => void
    nameRef: React.RefObject<HTMLInputElement>
    descriptionRef: React.RefObject<HTMLInputElement>
    timeRef: React.RefObject<HTMLInputElement>
    dateRef: React.RefObject<HTMLInputElement>
}


const From: React.FC<FormProps> = props => {
    return (
      <form className={classes.Form} onSubmit={props.submit}>
        <h1 className={classes.H1} > Add Reminder </h1>       
        <fieldset className={classes.Fieldset} >

          <label className={classes.Label} htmlFor="name">Name:</label>
          <input className={classes.Input} type="text" id="name" ref={props.nameRef} required />  

          <label className={classes.Label} htmlFor="Description">Description</label>
          <input className={classes.Input} type="text" id="Description" ref={props.descriptionRef} required />

          <label className={classes.Label} htmlFor="Date">Date</label>
          <input className={classes.Input} type="text" id="Date" ref={props.dateRef} required />

          <label className={classes.Label} htmlFor="Time">Time</label>
          <input className={classes.Input} type="text" id="Time" ref={props.timeRef} required />

        </fieldset>
            <button className={classes.Button} type="submit">Submit</button>
       </form>
    );
}

export default From;
