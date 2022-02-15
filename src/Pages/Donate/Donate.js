import React, { useEffect, useState } from 'react';
import { Button, Container, ProgressBar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserDonationData, setDonationAmount } from '../../features/counter/volunteerSlice';
import './Donate.css';

const Donate = () => {
    const data = useSelector( state => state.volunteerData.donationData);
    const donationAmount = useSelector( state => state.volunteerData.donationAmount);

    const dispatch = useDispatch();
    const [ donatorData, setDonatorData ] = useState({});
    const { id } = useParams();

    useEffect( ()=>{ 
        dispatch(setDonationAmount('$10'))
        dispatch(fetchUserDonationData())
    },[])

    const exactData = data.filter( d => d.id === id)
    console.log(exactData);


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
        const donationData = {...donatorData,amount: donationAmount.slice(1)}
        fetch('https://obscure-temple-53299.herokuapp.com/init',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(donationData)
        })
        .then( res=> res.json())
        .then(data=>{
            window.location.replace(data.GatewayPageURL)
            
        })
    }


    return (
        <Container className='my-5'>
            <div style={{backgroundImage:`url(${exactData[0]?.img})`}} className="donation-campaign-banner">
                <h1 data-aos="zoom-in" 
                data-aos-duration="500" 
                style={{fontWeight:'bold'}} className='display-4 text-center'
                >{exactData[0]?.title}</h1>
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
                    <Button onClick={ ()=> dispatch(setDonationAmount('$10')) } variant="outline-secondary" className="me-3 my-2">$10</Button>
                    <Button onClick={ ()=> dispatch(setDonationAmount('$20')) } variant="outline-secondary" className="me-3 my-2">$20</Button>
                    <Button onClick={ ()=> dispatch(setDonationAmount('$30')) } variant="outline-secondary" className="me-3 my-2">$30</Button>
                    <Button onClick={ ()=> dispatch(setDonationAmount('$40')) } variant="outline-secondary" className="me-3 my-2">$40</Button>
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
                    <Button variant="danger" type="submit">DONATE {`${donationAmount}`}</Button>
                </form>


        </Container>
    );
};

export default Donate;