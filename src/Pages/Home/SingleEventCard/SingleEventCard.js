import React from 'react';
import './singleEventCard.css';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setExactEventData } from '../../../features/counter/volunteerSlice';

const SingleEventCard = (props) => {
    const dispatch = useDispatch()
    const { title, day, month, spot, time, id } = props.data;
    const url = `/join-event/${id}`
    return (
        <div className='single-event-container'>
            <Row className="date">
                <div className="col-2">
                    <div className="day-container">
                        <h2>{day}</h2>
                    </div>
                </div>
                <div className="col-10">
                    <h3>{month}</h3>
                </div>
            </Row>
            <p>Organized By: <span style={{color:'#e32b17'}}>Volunteer Network</span></p>
            <h2>{title}</h2>
            <hr />
            
            
            <Row style={{alignItems:'center'}}>
                <div className="col-md-5">
                    <Link to={url}><Button  onClick={ ()=> dispatch(setExactEventData(props.data)) } variant='danger' className='my-3'>JOIN EVENT</Button></Link>
                </div>
                <div className="col-md-7">
                    <i class="fas fa-clock text-danger"></i> {time} -{spot}
                </div>
            </Row>
        </div>
    );
};

export default SingleEventCard;