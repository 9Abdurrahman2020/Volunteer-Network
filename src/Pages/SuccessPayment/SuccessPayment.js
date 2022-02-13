import React from 'react';
import './successPayment.css'

const SuccessPayment = () => {
    return (
        <div className='success-payment-container'>
            <div className="payment-container shadow">
                <h1 className='text-center text-success'>Payment successful !</h1>
                <h1 className='text-center text-success'><i class="fas fa-check-circle"></i></h1>
            </div>
        </div>
    );
};

export default SuccessPayment;