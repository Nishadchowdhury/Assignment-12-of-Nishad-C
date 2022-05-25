import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCardAllP = ({ product }) => {

    const { minimum, name, picture, price, quantity, description, _id } = product;

    const [showInfo, setShow] = useState(false);

    const showDetails = () => {
        setShow(true)
    }
    const HideDetails = () => {
        setShow(false)
    }

    return (
        <div onMouseOver={showDetails} onMouseLeave={HideDetails} class="card w-[450px]  bg-base-100 shadow-xl image-full   ">
            <figure className='relative' >
                <img className='w-full z-20 opacity-90 h-full overflow-hidden' src={picture} alt="Shoes" />

            </figure>
            {showInfo && <div class="card-body animation bg-black bg-opacity-40 relative">
                <h2 class="card-title  text-white">{name}</h2>
                <p className=' text-white'>{description}
                    <h3 className='text-2xl' > Per Item:- {price} </h3>
                    <h3 className='text-2xl' > left in stoke:- {quantity} </h3></p>

                <div class="card-actions justify-end  text-white">
                    <Link to={`/order/${_id}`} class="btn btn-primary">Buy Now</Link>
                </div>
                {+quantity === 0 && <span className='bg-red-500 text-white px-2 py-1 absolute w-auto h-auto top-0 left-0 ' > Out Of Stoke </span>}
            </div>}
        </div>
    );
};

export default SingleCardAllP;