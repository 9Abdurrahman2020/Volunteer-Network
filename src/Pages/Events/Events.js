import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchEventData } from '../../features/counter/volunteerSlice';
import './events.css';
import SingleEvent from './SingleEvent/SingleEvent';

const Events = () => {
    const dispatch = useDispatch();
    const events = useSelector( state => state.volunteerData.eventData)

    useEffect( ()=>{
        dispatch(fetchEventData())
    },[])
    

    return (
        <div>
            <div className="events-banner">
                <h1 data-aos="zoom-out" 
                data-aos-duration="500" 
                style={{fontWeight:'bold'}} className='display-4'>Upcoming Events</h1>
                <hr
                style={{backgroundColor:'#fc0f03'}}
                data-aos="zoom-out" 
                data-aos-duration="500" 
                className='horizontal-line2' />
            </div>
            <Container>
                <div className="event-page-event-container">
                    {
                        events.map( p => <SingleEvent id={p.id} data={p}/>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Events;