import React from 'react';
import Banner from './Shared/Banner';
import ClientsFeedBack from './Shared/ClientsFeedBack';
import OurWorks from './Shared/OurWorks';
import ProvideServices from './Shared/ProvideServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProvideServices />
            <OurWorks />
            <ClientsFeedBack />

        </div>
    );
};

export default Home;