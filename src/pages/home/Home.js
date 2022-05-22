import React from 'react';
import Footer from '../../shared/Footer';
import Carousel from './Carousel';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <FeaturedProducts/>
            <Footer/>
        </div>
    );
};

export default Home;