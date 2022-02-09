import React from 'react';
import { Row } from 'react-bootstrap';
import './static.css'

const Statics = () => {
    return (
        <div className='static-container'>
            <Row>
                <div className="col-md-6 col-lg-3">
                    <div className="state-card">
                        <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/07/money-dollar-box-line-2.svg" alt="" />
                        <h1 className='display-4' style={{color:'#0cf00c'}}>$98.5K</h1>
                        <p>Received Donation From Our Loving Peoples</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="state-card">
                        <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/07/hand-heart-line.svg" alt="" />
                        <h1 className='display-4' style={{color:'orange'}}>99K</h1>
                        <p>Different Projects Done With The Help Of Donators</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="state-card">
                        <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/07/Mask-Group-1.svg" alt="" />
                        <h1 className='display-4' style={{color:'#028fe0'}}>13.7K</h1>
                        <p>With Our Volunteer We've Solved Many Causes</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="state-card">
                        <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/07/t-shirt-air-line.svg" alt="" />
                        <h1 className='display-4' style={{color:'#b207e6'}}>90P</h1>
                        <p>A Team Consists Of The Best Volunteers</p>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Statics;