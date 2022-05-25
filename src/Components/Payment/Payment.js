import React from 'react';

const Payment = ({ dataForPaymentModal }) => {

    const { picture, _id, Product, Quantity, price, userName } = dataForPaymentModal;
    return (
        <div className=''>

            <input type="checkbox" id="payment-modal" class="modal-toggle" />
            <div class=" lg:ml-80 md:ml-40 modal z-50">
                <div class="modal-box w-11/12 max-w-5xl">
                    <div  >
                        <div class="modal-action">
                            <label for="payment-modal" class="btn">Yay!</label>
                        </div>
                        <div className='flex justify-center items-center flex-col gap-12 ' >

                            <div className=' flex justify-center shadow-2xl rounded-xl border-l-zinc-500 ' >
                                <figure className=""  ><img src={picture} className='w-40 rounded-2xl h-full overflow-hidden' alt="Movie" /></figure>

                                <div class="card-body pb-0 pr-0">
                                    <h2 class="card-title text-warning "> {Product} </h2>
                                    <p className='text-error'>Are Your Sure ? </p>
                                </div>
                            </div>


                            <div className=' flex justify-center shadow-2xl rounded-xl border-l-zinc-500 ' >
                                <figure className=""  ><img src={picture} className='w-40 rounded-2xl h-full overflow-hidden' alt="Movie" /></figure>

                                <div class="card-body pb-0 pr-0">
                                    <h2 class="card-title text-warning "> {Product} </h2>
                                    <p className='text-error'>Are Your Sure ? </p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Payment;


{/* <label for="payment-modal" class="btn">Yay!</label> */ }