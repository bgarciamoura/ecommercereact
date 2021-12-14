import React, { useEffect, useState } from 'react';
import Announcement from '../../components/Anouncement';
import Categories from '../../components/Categories';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import Slider from '../../components/Slider';

const Home: React.FC = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    );
};

export default Home;
