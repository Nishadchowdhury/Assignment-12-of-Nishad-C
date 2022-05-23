import React from 'react';
import banner from '../../Assets/images/banner.jpg';
import Footer from '../Shared/Footer/Footer';
import BusinessSummery from './BusinessSummery';
import ClientsReview from './ClientsReview';
import PartsContainer from './PartsContainer';
import SponsoredByHP from './SponsoredByHP';
import UpComingProducts from './UpComingProducts';

const Home = () => {
    return (
        <div>
            <div className='' > <img className=' ' src={banner} alt="banner img" /> </div>

            <PartsContainer />

            <hr className='mt-10 opacity-40 ' />

            <BusinessSummery />

            <ClientsReview />

            {/* extra 2 section */}
            <UpComingProducts />
            <SponsoredByHP />

            <Footer />
        </div>
    );
};

export default Home;