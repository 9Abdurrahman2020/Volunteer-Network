import React, { useEffect, useState } from 'react';
import { Button, Container, ProgressBar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setDonationAmount, setPaymentMethod } from '../../features/counter/volunteerSlice';
import './Donate.css'

const Donate = () => {
    const data = useSelector( state => state.volunteerData.exactDonateData);
    const donationAmount = useSelector( state => state.volunteerData.donationAmount);
    const paymentMethod = useSelector( state => state.volunteerData.paymentMethod);

    const dispatch = useDispatch();
    const [ donatorData, setDonatorData ] = useState({})

    const handleOnChange = (e)=>{
        const value = '$'+ e.target.value;
        dispatch(setDonationAmount((`${value}`)))
    }
    const handleOnChange2 = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        const newDonatorData = { ...donatorData };
        newDonatorData[name] = value;
        setDonatorData(newDonatorData)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        console.log(donatorData);
    }

    useEffect( ()=>{
        dispatch(setPaymentMethod('online'))
    },[])

    return (
        <Container className='my-5'>
            <div style={{backgroundImage:`url(${data.img})`}} className="donation-campaign-banner">
                <h1 data-aos="zoom-in" 
                data-aos-duration="500" 
                style={{fontWeight:'bold'}} className='display-4 text-center'
                >{data.title}</h1>
                <hr
                style={{backgroundColor:'#fc0f03'}}
                data-aos="zoom-in" 
                data-aos-duration="500" 
                className='horizontal-line2' />
            </div>
            <ProgressBar className="my-4" variant="info" now={5} label={0} />
                <Row className="achieved">
                    <div className="col-6">
                        <p className="my-2">Achieved: $0.00</p>
                        <p className="my-2">Target: $5,000.00</p>
                    </div>
                    <div className="col-6">
                        <h2 className="my-0 text-center">0%</h2>
                        <p className="my-0 text-center">Pledged So Far</p>
                    </div>
                </Row>
                <h2 className='mt-4'>Donation Amount: {donationAmount}</h2>
                <div className="donation-amount-container">
                    <Button onClick={ ()=> dispatch(setDonationAmount('$100')) } variant="outline-secondary" className="me-3 my-2">$100</Button>
                    <Button onClick={ ()=> dispatch(setDonationAmount('$200')) } variant="outline-secondary" className="me-3 my-2">$200</Button>
                    <Button onClick={ ()=> dispatch(setDonationAmount('$300')) } variant="outline-secondary" className="me-3 my-2">$300</Button>
                    <Button onClick={ ()=> dispatch(setDonationAmount('$400')) } variant="outline-secondary" className="me-3 my-2">$400</Button>
                </div>
                <div class="input-group my-2">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-dollar-sign"></i></span>
                    <input onChange={ handleOnChange } type="number" class="form-control" name="email" placeholder="Custom Amount"/>
                </div>
                <h4 className="mt-4 my-3">Details</h4>
                <form onSubmit={ handleOnSubmit }>
                    <div className="donation-detail-container">
                        <div class="input-group mb-3">
                            <input onChange={ handleOnChange2 } type="text" class="form-control" name="name" placeholder="Your Name" required/>
                        </div>
                        <div class="input-group mb-3">
                            <input onChange={ handleOnChange2 } type="text" class="form-control" name="email" placeholder="Your Email" required/>
                        </div>
                        <div class="input-group mb-3">
                            <input onChange={ handleOnChange2 } type="number" class="form-control" name="phone" placeholder="Your Phone" required/>
                        </div>
                        <div class="input-group mb-3">
                            <input onChange={ handleOnChange2 } type="text" class="form-control" name="country" placeholder="Country" required/>
                        </div>
                    </div>
                    <div style={{ margin:'20px 0'}} className='form-group'>
                        <textarea onChange={ handleOnChange2 } style={{height:'150px'}} 
                        name="message"
                        className="form-control"
                        placeholder='Your message'
                        id="inputMessage3"
                        label="message" 
                        />
                    </div>
                    <h4>Payment method:</h4>
                    <div onClick={ ()=> dispatch(setPaymentMethod('online'))} class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                        <label class="form-check-label" for="inlineRadio1">Online</label>
                        </div>
                        <div  onClick={ ()=> dispatch(setPaymentMethod('offline'))} class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">Offline</label>
                    </div>
                    <br />
                    {
                        paymentMethod === 'online' && <input type="text" placeholder='Enter credit card number'/>
                    }
                    <br />
                    <input className='btn btn-danger my-3' type="submit" value="DONATE" />
                </form>


        </Container>
    );
};

export default Donate;