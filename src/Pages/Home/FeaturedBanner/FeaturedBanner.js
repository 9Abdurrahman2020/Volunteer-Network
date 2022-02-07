import React from 'react';
import { Button, Container, ProgressBar, Row } from 'react-bootstrap';
import './featuredBanner.css'

const FeaturedBanner = () => {
    return (
        <div className='featured-container'>
            <Container>
            <Row style={{justifyContent:'space-between'}} className='g-4'>
                <div className="col-md-7 featured-left">
                    <h4 className='featured-subtitle'>Donations For Humanity, Safer Way!</h4>
                    <h1 style={{fontWeight:'bold'}} className='display-5'>Providing Urgent Aid For <br />Your Better Future</h1>
                    <h5 className='my-3'>Emergency relief to ongoing aid for those affected by storms.</h5>
                    <p className='mb-3'>Those who require more urgent or life-threatening emergency treatment should be treated in hospitals that have the necessary knowledge, systems, and resources to maximize their chances of survival and recovery.</p>
                    <Row>
                        <div className="col-md-8">
                            <h1 className='director display-4'>Johnson Stainter</h1>
                        </div>
                        <div className="col-md-4">
                            <h5>Johnson Stainter</h5>
                            <p>Director Volunteer network</p>
                        </div>
                    </Row>
                </div>
                <div className="col-md-4 featured-right">
                    <h2>Contribute for the <br />differently abled</h2>
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
                    <p style={{fontWeight:'500'}}>The great journey to end poverty for good begins with a child. Due to natural disasters and man made disasters...</p>
                    <Button variant="dark" className="mt-3" size="lg"><i class="fas fa-check-circle"></i> DONATE NOW</Button> 
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default FeaturedBanner;