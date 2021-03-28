import React, {useEffect } from 'react';
import {useQuery } from '@apollo/client'
import { REMINDERS } from '../../Graphql/Queries'
import ReminderComponent from '../../components/Reminder/Reminder';
import classes from './Reminders.module.css';

interface Reminder {
    name: String,
    description: String,
    date: String,
    time: String
}
interface ReminderData {
    reminders: Reminder[]
}


const GetCat: React.FC = () => {
    const { data, loading } = useQuery<ReminderData>(REMINDERS);

     useEffect(()=>{
     },[data])

    if(loading){
        return (<h1>Loading</h1>)
    }

    return (
       <div className={classes.Reminders} >
          {data && data.reminders.map((reminder)=>{
              return <ReminderComponent
                  name={reminder.name}
                  date={reminder.date}
                  time={reminder.time}
                  description={reminder.description} />
          })}
       </div>
    );
}
export default GetCat;
