import React from 'react';
import banner from '../../Assets/images/banner.jpg';
import Footer from '../Shared/Footer/Footer';
import PartsContainer from './PartsContainer';
import SponsoredByHP from './SponsoredByHP';
import UpComingProducts from './UpComingProducts';

const Home = () => {
    return (
        <div>
            <div className='' > <img src={banner} alt="banner img" /> </div>

            <PartsContainer />

            {/* extra 2 section */}
            <UpComingProducts />
            <SponsoredByHP />

            <Footer />
        </div>
    );
};

export default Home;