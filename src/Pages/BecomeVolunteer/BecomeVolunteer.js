import React, { useEffect, useState } from 'react';
import { Button, Modal, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './becomeVolunteer.css';

const BecomeVolunteer = () => {
    const { modal, setModal, user, postVolunteerData, getSingleVolunteer, isVolunteer, isLoading} = useAuth();
    const [ inputData, setInputData ] = useState({email:user?.email});
    
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData }
        newInputData[field] = value ;
        setInputData(newInputData)
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        postVolunteerData({...inputData, volunteer: true});
    }
    useEffect( ()=>{
        getSingleVolunteer(user.email)
    },[])

    if(isLoading){
       return <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>
    }

    return (
            <Row style={{width:'100%'}} className="inner-login-container">
                <Modal show={modal} centered>
                    <Modal.Header>
                    <Modal.Title>You Successfully Become A Volunteer !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hello Mr./Ms. {inputData?.name} You have successfully become a volunteer !</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={ ()=>setModal(false)}>
                        <Link style={{color:'white',textDecoration:'none'}} to="/">Go To Home</Link>
                    </Button>
                    </Modal.Footer>
                </Modal>
                {
                    !isVolunteer ? <>
                    <div className="col-lg-6 image-container">
                        <img width='100%' src="https://www.volunteeringnz.org.nz/wp-content/uploads/Group-of-Volunteers.jpg" alt="" />
                    </div>
                    <div className="col-lg-6 login-input-container">
                        <h3 className='mt-4 text-start text-warning'>BECOME A <span className='text-info'>VOLUNTEER</span></h3>
                        <hr
                            style={{backgroundColor:'#000'}}
                            data-aos="zoom-out" 
                            data-aos-duration="500" 
                            className='horizontal-line2 mb-4' />
                        <form onSubmit={ handleFormSubmit }>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                                <input onChange={ handleOnBlur } type="text" class="form-control" name="name" defaultValue={user?.displayName} placeholder="Your Name" aria-label="name" aria-describedby="basic-addon1" required/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                                <input onChange={ handleOnBlur } type="text" class="form-control" name="email" value={user?.email} placeholder="Your Email" aria-label="name" aria-describedby="basic-addon1" disabled/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                                <input onChange={ handleOnBlur } type="text" class="form-control" name="address" placeholder="Your Address" aria-label="address" aria-describedby="basic-addon1" required/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                                <input onChange={ handleOnBlur } type="number" class="form-control" name="phone" placeholder="Your Phone" aria-label="phone" aria-describedby="basic-addon1" required/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                                <input onChange={ handleOnBlur } type="text" class="form-control" name="occupation" placeholder="Your Occupation" aria-label="address" aria-describedby="basic-addon1" required/>
                            </div>
                            
                            
                            <input className='btn btn-success login-button' type="submit" value="Register as Volunteer" />
                        </form>
                    </div>
                    </> : <h1 className="text-success text-center">You already our volunteer !</h1>
                }
                
            </Row>
    );
};

export default BecomeVolunteer;