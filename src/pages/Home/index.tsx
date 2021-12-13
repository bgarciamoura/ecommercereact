import React, { useEffect, useState } from 'react';
import Announcement from '../../components/Anouncement';
import Categories from '../../components/Categories';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';

const Home: React.FC = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    );
};

export default Home;
