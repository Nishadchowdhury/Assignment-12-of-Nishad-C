import React from 'react';
import { useQuery } from 'react-query';
import banner from '../../Assets/images/banner.jpg';
import rootUrl from '../../Hooks/RootUrl';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading';
import BusinessSummery from './BusinessSummery';
import ClientsReview from './ClientsReview';
import PartsContainer from './PartsContainer';
import SponsoredByHP from './SponsoredByHP';
import UpComingProducts from './UpComingProducts';

const Home = () => {

    const { data: product, isLoading, error } = useQuery('limitedDataForHome', () => fetch(`${rootUrl}/ProductsLimit?total=3`).then(res => res.json()));

    const fetchData = { product, isLoading, error }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>

            <div className='' > <img className=' ' src={banner} alt="banner img" /> </div>

            <PartsContainer fetchData={fetchData} />

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