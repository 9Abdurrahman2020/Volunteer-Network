import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {

    
    return (
        <div className='login-container'>
            <Row className="inner-login-container shadow">
                <div className="col-lg-6 image-container">
                    <img src="https://i.ibb.co/TtqGrbh/loign-img.jpg" alt="" />
                </div>
                <div className="col-lg-6 login-input-container">
                    <h2 className='my-4'>LOGIN</h2>
                    <form>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                            <input type="email" class="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" required/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                        </div>
                        <p style={{textAlign:'left'}}>New ? <Link style={{textDecoration:'none'}} to="/registration">Create an account <i class="fas fa-arrow-right"></i></Link></p>
                        <input className='btn btn-success login-button' type="submit" value="Login" />
                    </form>
                    <div>
                        <p className="my-3">or</p>
                        <Button variant="danger"><i class="fab fa-google"></i> Sign in with Google</Button>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Login;