import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import rootUrl from '../../Hooks/RootUrl';
import CheckOutForm from '../Payment/CheckOutForm';
import Payment from '../Payment/Payment';
import CancelOrderModal from './CancelOrderModal';


const stripePromise = loadStripe('pk_test_51L1AKaFvzbbpnw6as8zL4ESyMeYTSLpi4fdgG8699CatvCDYs9NoRx2ZXoAripSGuC8F2kzHelz9qXGyhX9j6Rl800hYDmX1Fd');


const UserOrders = () => {

    const [user, loading] = useAuthState(auth)
    const userName = user.displayName;
    const [userOrders, setUserOrders] = useState([]);
    const [dataForModal, setDataForModal] = useState(null);
    const [refetch, setRefetch] = useState(null);
    const [dataForPaymentModal, setDataForPaymentModal] = useState(null);

    const url = `${rootUrl}/ordersByUser/${user?.email}`;

    useEffect(() => {

        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);
            })
    }, [refetch])


    console.log(userOrders);

    // Address: "Comilla,bangladesh"
    // BuyerEmail: "a@a.com"
    // Name: "Nishad"
    // Phone: "43325235"
    // Product: "RAM 4GB DDR3 3200mhz"
    // ProductId: "628a504516e7cdea8a729ced"
    // Quantity: "200"
    // isPaid:
    // picture: 



    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full ">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th className='text-center' >Image</th>
                            <th>Name</th>
                            <th>Buyer</th>
                            <th>Quantity</th>
                            <th>Total <span className=' text-orange-500' >$</span></th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrders?.map(({ BuyerEmail, Product, Quantity, pricePerUnit, ProductId, picture, price, isPaid, _id }, i) =>

                                <tr key={i} className='border-[1px] border-t-0 border-gray-700 ' >
                                    <th>{i + 1}</th>
                                    <td> <div class="avatar">
                                        <div class="w-24 mask mask-squircle">
                                            <img src={picture} alt='ok' />
                                        </div>
                                    </div> </td>
                                    <td className='text-xs' >{Product}</td>
                                    <td>{BuyerEmail}</td>
                                    <td>{Quantity}</td>
                                    <td>{price * Quantity}</td>
                                    <td>

                                        <div>
                                            {isPaid ? <button class="btn btn-disabled btn-xs text-green-500 ">Paid </button> :
                                                <div className='flex flex-col gap-4' >
                                                    <label
                                                        for="payment-modal"
                                                        class="btn btn-xs btn-info"
                                                        onClick={() => setDataForPaymentModal({ picture, _id, Product, Quantity, price, userName })}
                                                    >Pay Now </label>
                                                    <label
                                                        for="delete-order-modal"
                                                        class="btn modal-button btn-xs btn-error"
                                                        onClick={() => setDataForModal({ picture, _id, Product })}
                                                    >Cancel Order</label>

                                                </div>
                                            }
                                        </div>

                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>

                {/* <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements> */}

            </div>
            {dataForModal && <CancelOrderModal dataForModal={dataForModal} setRefetch={setRefetch} setDataForModal={setDataForModal} />}
            {dataForPaymentModal && <Payment dataForPaymentModal={dataForPaymentModal} setDataForPaymentModal={setDataForPaymentModal} />}
        </div>
    );
};

export default UserOrders;