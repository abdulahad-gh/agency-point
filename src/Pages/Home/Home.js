import React from 'react';
import Banner from './Shared/Banner';
import ClientsFeedBack from './Shared/ClientsFeedBack';
import ContactUs from './Shared/ContactUs';
import OurWorks from './Shared/OurWorks';
import ProvideServices from './Shared/ProvideServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProvideServices />
            <OurWorks />
            <ClientsFeedBack />
            <ContactUs />

        </div>
    );
};

export default Home;