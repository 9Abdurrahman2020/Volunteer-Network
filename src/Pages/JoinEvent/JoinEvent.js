import React, { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEventData } from '../../features/counter/volunteerSlice';
import './joinEvent.css'

const JoinEvent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(fetchEventData())
    },[])

    const event = useSelector( state=> state.volunteerData.eventData);
    const exactEvent = event.find( p => p.id === id );
    return (
        <Container>
            <Card>
            <div style={{backgroundImage:`url(${exactEvent?.img})`}} className="donation-campaign-banner px-5">
                <h1 data-aos="zoom-in" 
                data-aos-duration="500" 
                style={{fontWeight:'bold'}} className='display-4 text-center'
                >{exactEvent?.title}</h1>
                <hr
                style={{backgroundColor:'#fc0f03'}}
                data-aos="zoom-in" 
                data-aos-duration="500" 
                className='horizontal-line2' />
                <p className='event-des'>{exactEvent?.des}</p>
            </div>
                <Card.Body className='p-4'>
                    
                    <div className="event-info">
                        <div className="event-date">
                            <div>
                                <img src="https://loveicon.smartdemowp.com/wp-content/plugins/loveicon-core/assets/images/icon/date-1.png" alt="" />
                            </div>
                            <div className='ms-3'>
                                <h4>Event Date</h4>
                                <p className='my-0'>{exactEvent?.day} {exactEvent?.month} 2022</p>
                                <p className='my-0'>{exactEvent?.time}</p>
                            </div>
                        </div>
                        <div className="event-location">
                            <div>
                                <img src="https://loveicon.smartdemowp.com/wp-content/plugins/loveicon-core/assets/images/icon/map-marker-1.png" alt="" />
                            </div>
                            <div className='ms-3'>
                                <h4>Event Location</h4>
                                <p className='my-0'>{exactEvent?.spot}</p>
                            </div>
                        </div>
                    </div>
                    <Button variant="danger" size="lg"><i class="fas fa-check-circle"></i> JOIN THIS EVENT</Button>
                </Card.Body>
            </Card>
            
        </Container>
    );
};

export default JoinEvent;