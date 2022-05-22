import React from 'react';
import BusinessStat from '../../shared/BusinessStat';
import Carousel from './Carousel';
import FeaturedProducts from './FeaturedProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <FeaturedProducts/>
            <BusinessStat/>
            <Reviews/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;