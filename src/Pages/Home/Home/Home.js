import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AppealsDonations from '../AppealsDonations/AppealsDonations';
import BecomeAVolunteer from '../BecomeAVolunteer/BecomeAVolunteer';
import FeaturedBanner from '../FeaturedBanner/FeaturedBanner';
import OngoingProjects from '../OngoingProjects/OngoingProjects';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <FeaturedBanner/>
            <OngoingProjects/>
            <BecomeAVolunteer/>
            <AppealsDonations/>
            <Footer/>
        </div>
    );
};

export default Home;