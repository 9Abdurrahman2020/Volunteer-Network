import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './joinEvent.css'

const JoinEvent = () => {
    const event = useSelector( state=> state.volunteerData.exactEventData)
    return (
        <Container>
            <Card>
            <div style={{backgroundImage:`url(${event.img})`}} className="donation-campaign-banner px-5">
                <h1 data-aos="zoom-in" 
                data-aos-duration="500" 
                style={{fontWeight:'bold'}} className='display-4 text-center'
                >{event.title}</h1>
                <hr
                style={{backgroundColor:'#fc0f03'}}
                data-aos="zoom-in" 
                data-aos-duration="500" 
                className='horizontal-line2' />
                <p className='event-des'>{event.des}</p>
            </div>
                <Card.Body className='p-4'>
                    
                    <div className="event-info">
                        <div className="event-date">
                            <div>
                                <img src="https://loveicon.smartdemowp.com/wp-content/plugins/loveicon-core/assets/images/icon/date-1.png" alt="" />
                            </div>
                            <div className='ms-3'>
                                <h4>Event Date</h4>
                                <p className='my-0'>{event.day} {event.month} 2022</p>
                                <p className='my-0'>{event.time}</p>
                            </div>
                        </div>
                        <div className="event-location">
                            <div>
                                <img src="https://loveicon.smartdemowp.com/wp-content/plugins/loveicon-core/assets/images/icon/map-marker-1.png" alt="" />
                            </div>
                            <div className='ms-3'>
                                <h4>Event Location</h4>
                                <p className='my-0'>{event.spot}</p>
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