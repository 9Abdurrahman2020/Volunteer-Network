import React, { useEffect } from "react";
import './upcomingEvents.css'
import { Container, Row } from 'react-bootstrap';
import SliderClassCompo from "./SliderClassCompo/SliderClassCompo";
import { useDispatch } from "react-redux";
import { fetchEventData } from "../../../features/counter/volunteerSlice";
import { useSelector } from "react-redux";

const UpcomingEvents = ()=> {

    const dispatch = useDispatch()
    const eventData = useSelector( state => state.volunteerData.eventData )
    
    useEffect( ()=>{
        dispatch(fetchEventData())
    },[])

    return (
        <Row className="upcoming-events-container">
            <div className="col-md-6">
                <img style={{width:'100%'}} src="https://images.ctfassets.net/81iqaqpfd8fy/tUWvEu1ChSQShEw19vxBv/3b47b94d0b92dc56dfd2e76e849f8e19/teenvolunteermeta.jpg?w=1200&h=1200&fm=jpg&fit=fill" alt="" />
            </div>
            <div className="col-md-6">
                <Container className="py-5 events-container">
                    <div>
                        <h4 style={{fontFamily: "'Dancing Script', cursive",color:'#ed2b41'}}>Help With Featured Cause</h4>
                        <h1 className='display-4' style={{fontWeight:'bold'}}>Join Upcoming <br />Events & Webinars</h1>
                    </div>
                    <SliderClassCompo event={eventData}/>

                </Container>
            </div>
        </Row>
    );
};
export default UpcomingEvents;