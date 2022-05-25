import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import rootUrl from '../../Hooks/RootUrl';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L1AKaFvzbbpnw6as8zL4ESyMeYTSLpi4fdgG8699CatvCDYs9NoRx2ZXoAripSGuC8F2kzHelz9qXGyhX9j6Rl800hYDmX1Fd');

const Payment = ({ dataForPaymentModal, setDataForPaymentModal, refetch }) => {
    const [loading, setLoading] = useState(false);

    const { picture, _id, Product, Quantity, price, userName } = dataForPaymentModal;
    const total = +price * +Quantity;

    const url = `${rootUrl}`

    // const { data: }

    return (
        <div className='bg-glass'>

            <input type="checkbox" id="payment-modal" class="modal-toggle" />
            <div class=" lg:ml-80 md:ml-40 modal z-50">
                <div class="modal-box w-11/12 max-w-5xl">
                    <div  >
                        <div class="modal-action mt-0">
                            <label
                                onClick={() => setDataForPaymentModal(null)}
                                class="btn btn-md text-lg btn-circle"
                                disabled={loading}
                            >✕</label>
                        </div>
                        <div className='flex justify-center items-center flex-col gap-12 ' >

                            <div className=' flex justify-center shadow-2xl rounded-xl px-4 border-l-zinc-500 ' >
                                <figure className=""  ><img src={picture} className='w-40 rounded-2xl h-full overflow-hidden' alt="Movie" /></figure>

                                <div class="card-body pb-0 pr-0">
                                    <h2 class="card-title text-warning "> {Product} </h2>
                                    <p className='text-success  mt-2'>Total Cost :- <span className='text-black rounded-lg bg-white  p-2'>{total} USD </span>  </p>
                                </div>
                            </div>


                            <div className='  shadow-2xl rounded-xl border-l-zinc-500 min-w-[450px] p-5 py-2 min-h-28' >
                                <Elements stripe={stripePromise}>
                                    <CheckOutForm
                                        dataForPaymentModal={dataForPaymentModal} s
                                        etDataForPaymentModal={setDataForPaymentModal}
                                        setLoading={setLoading}
                                        loading={loading}
                                        refetch={refetch}
                                    />
                                </Elements>
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