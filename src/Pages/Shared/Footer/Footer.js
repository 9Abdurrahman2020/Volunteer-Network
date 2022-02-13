import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
            <div className="footer-inner-container">
                <div className="footer-about-us ">
                    <h4>About us</h4>
                    <p>Volunteer network is a trusted name for helping the poor who are neglected and affected. Volunteer network started their journey in 2010. Our slogan is “ Donate the poor and make the world happy”.</p>
                </div>
                <div className="footer-contact ">
                    <h4>Contact us</h4>
                    <p className='my-0'>Email: dev.abdurrahman01@gmail.com</p>
                    <p className='my-0'>Phone: +8801648308424</p>
                    <p className='my-0'>Address: Mohamaya,Chandpur Bangladesh.</p>
                </div>
                <div>
                    <h4> Our Location</h4>
                    <iframe title='something' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58651.76211125316!2d90.7531324319887!3d23.252723597843673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754f09d81ce305b%3A0xf84711ec30ec10e9!2sMohamaya%2C%20R140%2C%20Shah%20Mahmudpur!5e0!3m2!1sen!2sbd!4v1644416180614!5m2!1sen!2sbd" width="100%" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="copyRight-container my-3">
                <p className="text-center"><i class="far fa-copyright"></i> All rights are reserved by <a href="https://www.linkedin.com/in/abdur-rahman-a68278227/" rel='noreferrer' target="_blank">Abdur Rahman</a></p>
            </div>
            </div>
        </div>
    );
};

export default Footer;