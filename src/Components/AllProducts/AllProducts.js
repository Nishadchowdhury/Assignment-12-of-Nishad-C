import React from 'react';
import { useQuery } from 'react-query';
import rootUrl from '../../Hooks/RootUrl';
import Loading from '../Shared/Loading/Loading';

const AllProducts = () => {

    const { data: products, isLoading, error } = useQuery('allProducts', () => fetch(`${rootUrl}/allProducts`).then(res => res.json()));


    // console.log(products);

    if (isLoading) {
        return <div className="h-screen"><Loading /></div>
    }

    return (

        <div>
            {
                products.map(({ minimum, name, picture, price, quantity, description }, i) => <div> all products </div>)
            }
        </div >
    );
};

export default AllProducts;