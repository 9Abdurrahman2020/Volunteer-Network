import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import FeaturedBanner from '../FeaturedBanner/FeaturedBanner';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <FeaturedBanner/>
            <Footer/>
        </div>
    );
};

export default Home;