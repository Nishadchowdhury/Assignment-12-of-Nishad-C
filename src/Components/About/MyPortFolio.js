import React from 'react';

const MyPortFolio = () => {
    return (
        <div className='flex justify-center flex-col' >

            <div>
                <div class="card w-80 lg:w-[600px] my-5 border-[1px] border-gray-400  mx-auto bg-base-100 shadow-xl">
                    <div class="card card-side bg-base-100 shadow-xl">
                        <figure><img className='lg:w-48 w-16 rounded-full lg:rounded-none' src="https://i.ibb.co/dgfZk1L/my-self.jpg" alt="Movie" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Hello , i'am <span className='text-green-500' > Nishad  </span> . </h2>
                            <p>contact me : <span className='text-green-500' > nisahdhj111@gmail.com </span> </p>

                        </div>
                    </div>
                </div>
            </div>



            <div className='flex lg:flex-row lg:items-start flex-col items-center lg:justify-evenly'>
                <div>
                    <div class="card w-full my-5 border-[1px] border-gray-400  mx-auto bg-base-100 shadow-xl">
                        <div class="card card-side bg-base-100 shadow-xl">

                            <div class="card-body">
                                <h2 class="card-title">the Site about a private tutor <span className='text-green-500' >  </span> . </h2>
                                <p>Live Link:- <a className='text-green-500' href='https://assignment-10-3a9c6.web.app/' target='_blank' rel="noreferrer"  > Sikshaa master</a> </p>

                            </div>
                        </div>
                    </div>

                    <img className='w-96' src="https://i.ibb.co/0KTG3nL/sikshaa-master-home-page.png" alt="" />
                </div>

                <div>
                    <div class="card w-full my-5 border-[1px] border-gray-400  mx-auto bg-base-100 shadow-xl">
                        <div class="card card-side bg-base-100 shadow-xl">

                            <div class="card-body">
                                <h2 class="card-title">the Site about a Car Importer <span className='text-green-500' >  </span> . </h2>
                                <p>Live Link:- <a className='text-green-500' href='https://assignment-11-4ddf3.web.app/' target='_blank' rel="noreferrer"  >Dhaka's inventory</a> </p>

                            </div>
                        </div>
                    </div>
                    <img className='w-96' src="https://i.ibb.co/sqrLkVq/dhakas-inventory-ss-full.png" alt="" />
                </div>

            </div>

            <div>
                <div class="card lg:w-[600px] w-full  rounded-3xl my-5 border-[1px] border-gray-400  mx-auto bg-base-100 shadow-xl">
                    <div class="card card-side bg-base-100 shadow-xl ">

                        <div class="card-body">
                            <h2 class="card-title">the Site about Apple pac studio seller <span className='text-green-500' >  </span> . </h2>
                            <p>Live Link:- <a className='text-green-500' href='https://nishads-assignment-9.netlify.app/' target='_blank' rel="noreferrer"  >Your Mac Studio</a> </p>

                            <img className='w-full rounded-2xl' src="https://i.ibb.co/VN3xnrV/mac-studio-sell.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortFolio;