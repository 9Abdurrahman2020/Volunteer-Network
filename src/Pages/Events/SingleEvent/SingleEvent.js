import React from 'react';
import './singleEvent.css';
import { Button, Row } from 'react-bootstrap';

const SingleEvent = (props) => {

    const { title, day, month, spot, time, des } = props.data;

    return (
        <div className='single-event-container border card1'>
            <Row className="date">
                <div className="col-3">
                    <div className="day-container">
                        <h2>{day}</h2>
                    </div>
                </div>
                <div className="col-9">
                    <h3>{month}</h3>
                </div>
            </Row>
            <p>Organized By: <span style={{color:'#e32b17'}}>Volunteer Network</span></p>
            <h2>{title}</h2>
            <p>{des}</p>
            <hr />
            
            <Row style={{alignItems:'center'}}>
                <div className="col-md-5">
                    <Button variant='danger' className='my-3'>JOIN EVENT</Button>
                </div>
                <div className="col-md-7">
                    <i class="fas fa-clock text-danger"></i> {time} <br />{spot}
                </div>
            </Row>
            <div className="go-corner" href="#">
            <div className="go-arrow">
                →
            </div>
            </div>
        </div>
    );
};

export default SingleEvent;