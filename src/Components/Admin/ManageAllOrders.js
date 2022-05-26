import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import rootUrl from '../../Hooks/RootUrl';

const ManageAllOrders = () => {



    const [orders, setOrders] = useState([]);

    const { data, isLoading, refetch } = useQuery('allOrdersForAdmin', () => {
        fetch(`${rootUrl}/ordersByUser`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    })




    console.log(orders);

    const handleDelete = e => {

        const EveryThingOk = window.confirm('are you sure to delete ?')


        if (EveryThingOk) {

            fetch(`${rootUrl}/deleteMyOrder/${e}`, {
                method: "DELETE",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('ordre deleted successfully');
                    refetch()
                })

        }


    }

    return (
        <div>
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
                            orders?.map(({ BuyerEmail, Product, Quantity, pricePerUnit, ProductId, picture, price, isPaid, _id, transactionId }, i) =>

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
                                                        for="delete-order-modal"
                                                        class="btn modal-button btn-xs btn-error"
                                                        onClick={() => handleDelete(_id)}
                                                    >Delete Order</label>

                                                </div>
                                            }
                                            {transactionId && <p className='text-xs text-start' > transactionId:- <br /> <span className='text-yellow-500 ' > {transactionId}</span></p>}
                                        </div>

                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>

        </div >
    );



};

export default ManageAllOrders;