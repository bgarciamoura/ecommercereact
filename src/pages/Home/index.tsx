import React, { useEffect, useState } from 'react';
import Announcement from '../../components/Anouncement';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';

const Home: React.FC = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    );
};

export default Home;
