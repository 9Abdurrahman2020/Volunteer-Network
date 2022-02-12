import React from 'react';
import { Button, ProgressBar, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setExactDonateData } from '../../../features/counter/volunteerSlice';
import './singleDonationCard.css'

const SingleDonationCard = (props) => {
    const dispatch = useDispatch()
    const {title,img,des,id} = props.data;
    const url = `/donate/${id}`;

    return (
        <div className="my-5 border donation-card-container">
            <div className='donation-img-container'>
                <img style={{width:'100%'}} src={img} alt="" />
            </div>
            <div className="featured-right2">
                <h4>{title}</h4>
                <ProgressBar className="my-4" variant="danger" now={10} label={0} />
                <Row className="achieved">
                    <div className="col-6">
                        <p className="my-2">Achieved: $0.00</p>
                        <p className="my-2">Target: $5,000.00</p>
                    </div>
                    <div className="col-6">
                        <h2 className="my-0 text-center">0%</h2>
                        <p className="my-0">Pledged So Far</p>
                    </div>
                </Row>
                <hr />
                <p style={{fontWeight:'500'}}>{des}</p>
                <Link to={url}> <Button onClick={ ()=> dispatch(setExactDonateData(props.data) )} variant="dark" className="mt-3" size="lg"><i class="fas fa-check-circle"></i> DONATE NOW</Button> </Link> 
            </div>
        </div>
    );
};

export default SingleDonationCard;