import React from 'react';
import { Container} from 'react-bootstrap';
import './OngoingProjects.css'

const OngoingProjects = () => {
    return (
        <Container className="my-5 py-5">
            <h1 style={{fontWeight:'bold',color:'blue'}} className='text-center display-5'>Ongoing <span className='text-danger'>Projects</span></h1>
            <div className='hr-container'>
                <hr
                data-aos="zoom-out" 
                data-aos-duration="900" 
                data-aos-delay="500"
                className='horizontal-line2' />
            </div>
            <div className="card-container">
                <div className="project-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-1.png" alt="" />
                    <h5>EMERGENCY AIDS</h5>
                </div>
                <div className="project-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-2.png" alt="" />
                    <h5>ZERO POVERTY</h5>
                </div>
                <div className="project-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-3.png" alt="" />
                    <h5>RELIEF FUNDING</h5>
                </div>
                <div className="project-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-4.png" alt="" />
                    <h5>TOP EDUCATION</h5>
                </div>
            </div>
            <div className="card-container2">
                <div className="project-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-5.png" alt="" />
                    <h5>FOOD & WATER</h5>
                </div>
                <div className="project-card middle-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-6.png" alt="" />
                    <h5>FREE MEDICALS</h5>
                </div>
                <div className="project-card">
                    <img src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/ongoing-project-7.png" alt="" />
                    <h5>ORPHAN SUPPORT</h5>
                </div>
            </div>
        </Container>
    );
};

export default OngoingProjects;