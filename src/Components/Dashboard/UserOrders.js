import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { userContextFirebase } from '../../App';
import auth from '../../firebase.init';
import rootUrl from '../../Hooks/RootUrl';
import CheckOutForm from '../Payment/CheckOutForm';
import Payment from '../Payment/Payment';
import Loading from '../Shared/Loading/Loading';
import CancelOrderModal from './CancelOrderModal';


const UserOrders = () => {

    const [user, loading, error] = useContext(userContextFirebase);
    const userName = user.displayName;
    const [userOrders, setUserOrders] = useState([]);
    const [dataForModal, setDataForModal] = useState(null);
    const [dataForPaymentModal, setDataForPaymentModal] = useState(null);

    const url = `${rootUrl}/ordersByUser/${user?.email}`;

    const { data, isLoading, refetch } = useQuery("userUpdateing", () =>

        fetch(url, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);
            }))



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


    if (isLoading) { return <div className='flex justify-center items-center w-full' > <Loading />  </div> }

    return (
        <div>
            {!userOrders.length ? <div className='flex justify-center items-center w-auto'> <span className='text-red-500 text-4xl lg:text-6xl mt-72' >No Order Yet .</span> </div> :
                <div class=" mb-36">
                    <table class="table relative w-full ">

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
                                userOrders?.map(({ BuyerEmail, Product, Quantity, pricePerUnit, ProductId, picture, price, isPaid, _id, transactionId }, i) =>

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
                                                {transactionId && <p className='text-xs text-start' > transactionId:- <br /> <span className='text-yellow-500 ' > {transactionId}</span></p>}
                                            </div>

                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>

                </div>}
            {dataForModal && <CancelOrderModal
                dataForModal={dataForModal}
                refetch={refetch}
                setDataForModal={setDataForModal} />}
            {dataForPaymentModal && <Payment
                refetch={refetch}
                dataForPaymentModal={dataForPaymentModal}
                setDataForPaymentModal={setDataForPaymentModal} />}
        </div>
    );
};

export default UserOrders;