import React, {  useEffect, useState } from 'react';
import { Alert, Button, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './login.css';

const Login = () => {

    const [ inputData, setInputData ] = useState({});
    const { googleSignIn, user, modal, setModal, loginUser, authError, setAuthError } = useAuth();
    console.log(user);

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
        loginUser(inputData);
    }

    
    return (
        <div className='login-container'>
            <Row className="inner-login-container shadow">
            <Modal show={modal} centered>
                    <Modal.Header>
                    <Modal.Title>Login Successful !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully Logged in !</Modal.Body>
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
                    <h2 className='my-4'>LOGIN</h2>
                    <form onSubmit={ handleFormSubmit }>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                            <input onBlur={ handleOnBlur } type="email" class="form-control" name="email" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" required/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                            <input onBlur={ handleOnBlur } type="password" class="form-control" name="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                        </div>
                        <p style={{textAlign:'left'}}>New ? <Link style={{textDecoration:'none'}} to="/registration">Create an account <i class="fas fa-arrow-right"></i></Link></p>
                        <span className="text-danger">{authError}</span>
                        <input className='btn btn-success login-button' type="submit" value="Login" />
                    </form>
                    <div>
                        <p className="my-3">or</p>
                        <Button onClick={ googleSignIn } variant="danger"><i class="fab fa-google"></i> Sign in with Google</Button>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Login;