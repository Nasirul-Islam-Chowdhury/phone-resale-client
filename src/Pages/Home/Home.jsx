import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Categories from '../../Components/Categories/Categories';
import AdvertisedItems from '../../Components/AdvertisedItems/AdvertisedItems';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <AdvertisedItems/>
        </div>
    );
};

export default Home;