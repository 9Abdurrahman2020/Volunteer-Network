import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDonationData } from '../../features/counter/volunteerSlice';
import SingleDonationCard from '../Home/SingleDonationCard/SingleDonationCard';
import './causes.css'

const Causes = () => {
    const dispatch = useDispatch();
    const donation = useSelector( state => state.volunteerData.donationData)

    useEffect( ()=>{
        dispatch(fetchUserDonationData())
    },[])

    return (
        <div>
            <div className="donation-campaign-banner">
                <h1 data-aos="zoom-in" 
                data-aos-duration="500" 
                style={{fontWeight:'bold'}} className='display-4'
                >Our Campaign</h1>
                <hr
                style={{backgroundColor:'#fc0f03'}}
                data-aos="zoom-in" 
                data-aos-duration="500" 
                className='horizontal-line2' />
            </div>
            <Container className="causes-container">
            {
                donation.map( pd => <SingleDonationCard key={pd.id} data={pd} /> )
            }
            </Container>
        </div>
    );
};

export default Causes;