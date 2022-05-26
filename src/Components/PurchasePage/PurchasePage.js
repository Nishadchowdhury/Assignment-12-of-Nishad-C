import { async } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { userContextFirebase } from '../../App';
import auth from '../../firebase.init';
import { commonButton } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';
import Loading from '../Shared/Loading/Loading';
import OrderModal from './OrderModal';

const PurchasePage = () => {
    // disabled={!this.state.value}
    const id = useLocation().pathname.split('/')[2];
    // const [user, loadingUser] = useAuthState(auth);

    const [user, loadingUser, error] = useContext(userContextFirebase);

    const { displayName, email, phoneNumber, photoURL } = user;

    const [loading, setLoading] = useState(false);
    const [loadingOrder, setLoadingOrder] = useState(false)

    const [data, setData] = useState({});

    const [showModal, setShowModal] = useState(false);

    const { description, minimum, name, picture, price, quantity, _id } = data;

    const { data: optionsa, isLoading, refetch } = useQuery("placeOrderPage", () =>

        fetch(`${rootUrl}/ProductSingle/${id}`,
            {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                setData(data)
            }));



    const handleOrder = async e => {
        e.preventDefault()
        setLoadingOrder(true);

        const order = {
            ProductId: _id,
            BuyerEmail: email,
            price: price,
            isPaid: false,
            picture: picture,
            Name: e.target.Name.value,
            Address: e.target.Address.value,
            Phone: e.target.Phone.value,
            Product: e.target.Product.value,
            Quantity: e.target.Quantity.value
        }

        const url = `${rootUrl}/addOrder`;
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        };


        fetch(url, options)
            .then(response => {
                console.log(response.status);
                e.target.reset()
                setShowModal(false)
                setLoadingOrder(false)

                const url = `${rootUrl}/updateQuantity/${_id}`;
                const option = {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({
                        quantity: +quantity - +order.Quantity,
                    })
                }
                fetch(url, option).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch()
                    })
            });
    }

    if (loading || loadingUser) {
        return <div className='min-h-[90vh]' > <Loading /> </div>
    }

    return (
        <div className='lg:min-h-[90vh]  flex flex-col justify-center mb-6 lg:mb-0  ' >
            <div className='flex justify-center items-center mb-4 flex-col' >
                <div className='text-end' >  <span>Hello</span> <div className='inline-block' >{displayName ? <span className='text-green-500' >{displayName}</span> : <div> <span className='text-red-500' > No Name</span> <Link className='btn btn-xs btn-primary' to='/login'> Add Name </Link>  </div>}</div> </div>
                <div>
                    <span className='text-green-500' >{email} </span>
                </div>
            </div>
            <div class="card lg:overflow-y-auto mx-auto w-11/12 border-[1px] lg:card-side bg-base-100 shadow-xl">
                <div className=''>  <figure className='relative' >
                    <img className='lg:w-[26rem] h-full ' src={picture} alt="Album" />
                    {+quantity === 0 && <span className='bg-red-500 text-white px-2 py-1 absolute w-auto h-auto top-0 left-0 ' > Out Of Stoke </span>}
                </figure></div>
                <div class="card-body">
                    <h2 class="card-title text-white opacity-90"> Name: {name}</h2>
                    <h2 class="card-title text-white opacity-90"> in Stoke: {quantity}</h2>
                    <h2 class="card-title text-white opacity-90"> Minimum acceptable amount: {minimum}</h2>
                    <h2 class="card-title text-white opacity-90"> Par Unite Cost: {price} $</h2><br />

                    <h2 className='card-title text-2xl' > Product Details:- </h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <label onClick={() => setShowModal(true)} for="orderModal" disabled={+quantity === 0 || isLoading} class={`btn modal-button ${commonButton}`}>Make a order</label>
                    </div>
                </div>
            </div>
            {showModal && <OrderModal data={data} user={user} setLoadingOrder={setLoadingOrder} loadingOrder={loadingOrder} handleOrder={handleOrder} />}
        </div>
    );
};

export default PurchasePage;