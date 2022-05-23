import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { headerClass } from '../../Hooks/Classes';
import { commonButton } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';
import Loading from '../Shared/Loading/Loading';

const PartsContainer = () => {



    const { data: product, isLoading, error } = useQuery('limitedDataForHome', () => fetch(`${rootUrl}/ProductsLimit?total=3`).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (

        <div>

            <h1 className={headerClass}> Parts </h1>
            <div className='flex flex-col gap-4 mt-8 ' >

                {product.map(({ minimum, name, picture, price, quantity, description, _id }, i) =>
                    <div key={i} class="card lg:card-side bg-base-100 shadow-xl w-[80%] mx-auto ">
                        <figure className='lg:h-80 lg:w-[40%]' ><img className='w-full' src={picture} alt="Album" /></figure>
                        <div class="card-body border-[1px] lg:w-3/5 lg:border-l-0 lg:rounded-r-2xl">
                            <h2 class="card-title text-white opacity-90"> Item Name: {name}</h2>
                            <h2 class="card-title text-white opacity-90 text-base "> Par Unite Cost: {price}$</h2>
                            <h2 class="card-title text-white opacity-90 text-base "> Minimum acceptable amount: {minimum} Piece</h2>


                            <p className='full text-sm ' >{description}</p>
                            <div class="card-actions justify-end">
                                <Link to={`/order/${_id}`} className={`${commonButton}`}>Order Now</Link>
                            </div>
                        </div>
                    </div>
                )}

                <div className='flex justify-center' >  <Link to='/allProducts' className={`${commonButton} `}> See All Products </Link> </div>
            </div>
        </div>
    );
};

export default PartsContainer;