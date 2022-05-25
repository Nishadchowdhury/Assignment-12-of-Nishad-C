import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import rootUrl from '../../Hooks/RootUrl';

const UserOrders = () => {

    const [user, loading] = useAuthState(auth)

    const [userOrders, setUserOrders] = useState([]);

    const url = `${rootUrl}/ordersByUser/${user?.email}`;
    useEffect(() => {

        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);
            })
    }, [])

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
                            userOrders?.map(({ BuyerEmail, Product, Quantity, pricePerUnit, ProductId, picture, price, isPaid }, i) =>

                                <tr key={ProductId} className='border-[1px] border-t-0 border-gray-700 ' >
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
                                                <div className='flex flex-col gap-2' >
                                                    <button class="btn btn-xs btn-info ">Pay Now </button>
                                                    <button class="btn btn-xs btn-error ">Cancel </button> </div>
                                            }
                                        </div>

                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserOrders;