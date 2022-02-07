import React from 'react';
import { Button } from 'react-bootstrap';
import './topBanner.css';

const TopBanner = () => {
    return (
        <div className='topBanner-container'>
            <div
            className="top-heading container">
                <h4  data-aos="fade-down"
                data-aos-delay="500"
     data-aos-easing="linear"
     data-aos-duration="900" className='topBanner-subtitle'>Change the life, Change the world</h4>
                <h1 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    style={{fontWeight:'bold',color:'#fff'}} class="display-1">Every Good <br /> Act is a Charity</h1>
                    <hr 
                    data-aos="zoom-out-right" 
                    data-aos-duration="900" 
                    data-aos-delay="900"
                    className='horizontal-line' />
                <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                data-aos-delay="900"
                >
                    <h3 className='text-white'>We,ve been tackling poverty in communities to build better lives</h3>
                    <Button variant="danger" className="me-3" size="lg">SUPPORT US</Button> 
                    <Button variant="dark" size="lg">HOW WE HELP</Button> 
                </div>
            </div>
        </div>
    );
};

export default TopBanner;