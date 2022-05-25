import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { headerClass } from '../../Hooks/Classes';
import { commonButton } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';
import Loading from '../Shared/Loading/Loading';

const PartsContainer = ({ fetchData }) => {

    const { product, isLoading, error } = fetchData;


    if (isLoading) {
        return <div className='min-h-[350px] max-h-[500px] flex justify-center items-center' >  <Loading /> </div>
    }
    return (

        <div className='mt-5'>

            <h1 className={headerClass}> Parts </h1>

            <div className='flex flex-col gap-4 mt-8 ' >

                {product?.map(({ minimum, name, picture, price, quantity, description, _id }, i) =>
                    <div key={i} className="card lg:card-side bg-base-100 shadow-xl w-[80%] mx-auto ">

                        <figure className='lg:h-80 lg:w-[40%] relative' ><img className='w-full' src={picture} alt="Album" />
                            {+quantity === 0 && <span className='bg-red-500 text-white px-2 py-1 absolute w-auto h-auto top-0 left-0 ' > Out Of Stoke </span>}
                        </figure>


                        <div className="card-body border-[1px] lg:w-3/5 lg:border-l-0 lg:rounded-r-2xl">
                            <h2 className="card-title text-white opacity-90"> Item Name: {name}</h2>
                            <h2 className="card-title text-white opacity-90 text-base "> in Stoke:  {quantity}$</h2>
                            <h2 className="card-title text-white opacity-90 text-base "> Per Unite Cost: {price}$</h2>
                            <h2 className="card-title text-white opacity-90 text-base "> Minimum acceptable amount: {minimum} Piece</h2>


                            <p className='full text-sm ' >{description}</p>
                            <div className="card-actions justify-end">
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