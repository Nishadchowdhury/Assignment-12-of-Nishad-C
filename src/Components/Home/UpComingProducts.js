import React from 'react';
import { commonButton, headerClass } from '../../Hooks/Classes';

const UpComingProducts = () => {
    return (
        <div class={`hero mt-16 shadow-2xl bg-[url("https://i.ibb.co/N7P3CTZ/AMD-Radeon-bg-our-next-product.webp")] h-[400px]`}>
            <div class="block hero-overlay bg-opacity-60"></div>
            <div class=" hero-content text-center text-neutral-content">
                <div>
                    <h1 className={` mb-16 ${headerClass} uppercase text-white opacity-75 `} > Our up-coming product </h1>

                    <div class=" ">

                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5  ">There are primarily two major GPU (graphics processing unit) manufacturing companies, AMD and NVIDIA. They make the Radeon and GeForce line of graphics solutions, respectively. When you are looking for a laptop with a good graphics solution, don’t be content knowing if it’s a NVIDIA GeForce or an AMD Radeon.</p>
                        <button class={commonButton}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComingProducts;