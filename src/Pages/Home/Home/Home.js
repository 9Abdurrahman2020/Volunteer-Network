import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppealsDonations from '../AppealsDonations/AppealsDonations';
import BecomeAVolunteer from '../BecomeAVolunteer/BecomeAVolunteer';
import FeaturedBanner from '../FeaturedBanner/FeaturedBanner';
import OngoingProjects from '../OngoingProjects/OngoingProjects';
import Statics from '../Statics/Statics';
import TopBanner from '../TopBanner/TopBanner';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const Home = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <TopBanner/>
            <FeaturedBanner/>
            <OngoingProjects/>
            <BecomeAVolunteer/>
            <AppealsDonations/>
            <Statics/>
            <UpcomingEvents/>
            <Footer/>
        </div>
    );
};

export default Home;