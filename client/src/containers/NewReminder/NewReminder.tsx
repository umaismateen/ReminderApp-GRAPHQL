import React, { useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ADD_REMINDER } from '../../Graphql/Mutations';
import {REMINDERS} from '../../Graphql/Queries';
import { useMutation } from '@apollo/client';
import Form from '../../components/Form/Form';



const NewReminder: React.FC<RouteComponentProps> = props => {

    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);

    const [addReminder, { error }] = useMutation(ADD_REMINDER, {
        update(cache, { data: { addReminder }}){
            const data:any = cache.readQuery({query: REMINDERS })
            cache.writeQuery({
                query: REMINDERS,
                data: {
                    reminders: [addReminder,...data.reminders]
                }
            })
        }
    }
    );

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const name = nameRef.current!.value;
        const description = descriptionRef.current!.value;
        const date = dateRef.current!.value;
        const time = timeRef.current!.value;
        console.log(name, description, date, time)

        addReminder({
            variables: {
                newReminder: {
                    name,
                    description,
                    date,
                    time
                }
            }
        })

        if (error) {
            return (
                <h1>{error}</h1>
            )
        }
        props.history.push('/');
    }

    return (
        <Form
            submit={submitHandler}
            nameRef={nameRef}
            descriptionRef={descriptionRef}
            timeRef={timeRef}
            dateRef={dateRef}
        />
    )
}

export default NewReminder;