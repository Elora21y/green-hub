import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedGardeners from '../components/home/FeaturedGardeners';
import FAQ from '../components/home/FAQ';
import TopTrending from '../components/home/TopTrending';
import TopContributors from '../components/home/TopContributors';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedGardeners/>
            <TopTrending/>
            <FAQ/>
            <TopContributors/>
        </div>
    );
};

export default Home;