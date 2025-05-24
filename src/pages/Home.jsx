import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedGardeners from '../components/home/FeaturedGardeners';
import FAQ from '../components/home/FAQ';
import TopTrending from '../components/home/TopTrending';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedGardeners/>
            <TopTrending/>
            <FAQ/>
        </div>
    );
};

export default Home;