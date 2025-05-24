import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedGardeners from '../components/home/FeaturedGardeners';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedGardeners/>
            <FAQ/>
        </div>
    );
};

export default Home;