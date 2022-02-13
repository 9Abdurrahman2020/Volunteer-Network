import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './successPayment.css'

const SuccessPayment = () => {
    return (
        <div className='success-payment-container'>
            <div className="payment-container shadow">
                <h1 className='text-center text-success'>Payment successful !</h1>
                <h1 className='text-center text-success'><i class="fas fa-check-circle"></i></h1>
                <div className='payment-button-container'>
                    <Link to="/"><Button variant="danger">Go To Button</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPayment;