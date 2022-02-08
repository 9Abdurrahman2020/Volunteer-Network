import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './becomeAVolunteer.css'

const BecomeAVolunteer = () => {
    return (
        <div className='volunteer-container'>
        <Container>
            <div style={{position:'relative'}} className='quote-container'>
                <img src="https://png.pngtree.com/png-vector/20210205/ourlarge/pngtree-father-holding-his-daughter-in-his-hands-telling-stories-and-smiling-png-image_2870296.jpg" alt="" />
                    <div style={{position:'absolute',top:'-25vh',padding:'30px 50px',color:'black',}}>
                        <h1>Service to others <br />is the rent you pay <br />for your room here <br />on earth .</h1>
                        <q>---Muhammad Ali---</q>
                    </div>
            </div>
            <Row className='become-container'>
                <Row style={{alignItems:'center'}} className="col-md-6">
                    <div className="col-3">
                        <img style={{width:'100%'}} src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/volunteer.png" alt="" />
                    </div>
                    <div className="col-9">
                        <h4>Make A Difference Today !</h4>
                        <h1 style={{color:'orange'}}>Become A Volunteer</h1>
                    </div>
                </Row>
                <div className="col-md-6">
                    <div style={{textAlign:'center'}}>
                        <Button variant="danger" className="mt-3" size="lg"><i class="fas fa-check-circle"></i> BECOME A VOLUNTEER</Button>
                    </div> 
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default BecomeAVolunteer;