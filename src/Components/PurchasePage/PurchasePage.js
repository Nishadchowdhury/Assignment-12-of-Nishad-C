import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import rootUrl from '../../Hooks/RootUrl';

const PurchasePage = () => {
    // disabled={!this.state.value}

    const id = useLocation().pathname.split('/')[2];

    const [user, loading] = useAuthState(auth);

    const { displayName, email, phoneNumber, photoURL } = user;

    const [data, setData] = useState({});

    const { description, minimum, name, picture, price, quantity, _id } = data;

    useEffect(() => {
        fetch(`${rootUrl}/ProductSingle/${id}`,
            {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => setData(json));

    }, [])

    console.log(data);

    return (
        <div className='min-h-[90vh] flex flex-col justify-center ' >
            <div class="card mx-auto w-11/12 border-[1px] lg:card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title"> Name: {name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;