import React, {  useEffect, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {

    const [ inputData, setInputData ] = useState({});
    const { modal, setModal, user, registerUser, authError, setAuthError} = useAuth();

    useEffect( ()=>{
        setAuthError('')
    },[])

    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData }
        newInputData[field] = value ;
        setInputData(newInputData)
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        registerUser(inputData)
    }

    return (
        <div className='login-container'>
            <Row className="inner-login-container shadow">
                <Modal show={modal} centered>
                    <Modal.Header>
                    <Modal.Title>Registration Successful !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully registered !</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={ ()=>setModal(false)}>
                        <Link style={{color:'white',textDecoration:'none'}} to="/">Go To Home</Link>
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div className="col-lg-6 image-container">
                    <img src="https://i.ibb.co/TtqGrbh/loign-img.jpg" alt="" />
                </div>
                <div className="col-lg-6 login-input-container">
                    <h2 className='my-4'>REGISTER</h2>
                    <form onSubmit={ handleFormSubmit }>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                            <input onBlur={ handleOnBlur } type="text" class="form-control" name="name" placeholder="Full Name" aria-label="name" aria-describedby="basic-addon1" required/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                            <input onBlur={ handleOnBlur } type="email" class="form-control" name="email" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" required/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                            <input onBlur={ handleOnBlur } type="password" class="form-control" name="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                        </div>
                        <p style={{textAlign:'left'}}>Already have an Account ? <Link style={{textDecoration:'none'}} to="/login">Login <i class="fas fa-arrow-right"></i></Link></p>
                        <span className="text-danger">{authError}</span>
                        <input className='btn btn-success login-button' type="submit" value="Register" />
                    </form>
                </div>
            </Row>
        </div>
    );
};

export default Registration;