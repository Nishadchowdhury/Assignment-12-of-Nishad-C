import React from 'react';
import { headerClass } from '../../Hooks/Classes';

const ClientsReview = () => {
    return (
        <div>
            <h1 className={`${headerClass} mb-5 `} > Clients review </h1>
            <div className='w-4/5 mx-auto grid lg:grid-cols-3 grid-flow-row gap-4 ' >

                <div class="stack ">
                    <div class="card glass border-[1px] border-white  card-side bg-base-100 shadow-xl">
                        <figure><img className='w-36' src="https://i.ibb.co/F3DHJ1t/middlest-businessman.jpg" alt="Movie" /></figure>
                        <div class="card-body p-5 ">
                            <h2 class="card-title">HE Khalid Ali</h2>
                            <p className='text-sm' >Their products are really good , our business is growing up because our Customers are really Satisfied with all the products , that's why we trust on <strong>Laparts.com</strong> </p>
                            <div class="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>


                <div class="stack ">
                    <div class="card glass border-[1px] border-white  card-side bg-base-100 shadow-xl">
                        <figure><img className='w-36' src="https://i.ibb.co/ZVFVMVh/chinese-businessman.jpg" alt="Movie" /></figure>
                        <div class="card-body p-5 ">
                            <h2 class="card-title">Zhong Shanshan</h2>
                            <p className='text-sm' >Their products are really good , our business is growing up because our Customers are really Satisfied with all the products , that's why we trust on <strong>Laparts.com</strong> </p>
                            <div class="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>


                <div class="stack ">
                    <div class="card glass border-[1px] border-white  card-side bg-base-100 shadow-xl">
                        <figure><img className='w-36' src="https://i.ibb.co/zZ4rK4M/indian-businessman.jpg" alt="Movie" /></figure>
                        <div class="card-body p-5 ">
                            <h2 class="card-title">Kumar Birla</h2>
                            <p className='text-sm' >Their products are really good , our business is growing up because our Customers are really Satisfied with all the products , that's why we trust on <strong>Laparts.com</strong> </p>
                            <div class="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ClientsReview;