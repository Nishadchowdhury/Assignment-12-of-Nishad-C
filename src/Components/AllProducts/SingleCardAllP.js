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
            <figure><img className='w-full z-20 opacity-90 h-full overflow-hidden' src={picture} alt="Shoes" /></figure>
            {showInfo && <div class="card-body animation bg-black bg-opacity-40">
                <h2 class="card-title  text-white">Shoes!</h2>
                <p className=' text-white'>{description}</p>
                <div class="card-actions justify-end  text-white">
                    <Link to={`/order/${_id}`} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>}
        </div>
    );
};

export default SingleCardAllP;