import React from 'react';
import { useSelector } from 'react-redux';

const JoinEvent = () => {
    const event = useSelector( state=> state.volunteerData.exactEventData)
    return (
        <div>
            <h1>{event.title}</h1>
        </div>
    );
};

export default JoinEvent;