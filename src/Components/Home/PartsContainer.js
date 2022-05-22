import React, { useEffect, useState } from 'react';

const PartsContainer = () => {

    const [product, setProduct] = useState([]);


    useEffect(() => {


    }, [])

    console.log(product);


    return (
        <div>



            {product.map((product, i) => <div class="card lg:card-side bg-base-100 shadow-xl w-[80%] mx-auto ">
                <figure className='lg:h-80 lg:w-[500px]' ><img className='w-full' src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default PartsContainer;