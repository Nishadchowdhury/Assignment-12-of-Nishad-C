import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import rootUrl from '../../Hooks/RootUrl';

const ManageProducts = () => {
    const { data: products, isLoading, error, refetch } = useQuery('allProductsForManage', () => fetch(`${rootUrl}/allProducts`).then(res => res.json()));


    const habdleManageProDuct = e => {

        console.log(e);

        fetch(`${rootUrl}/allProducts/${e}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('product deleted')
                refetch()
            })


    }


    return (
        <div className='flex flex-wrap gap-3 justify-center my-3 ' >
            {
                products?.map(({ description, minimum, name, picture, price, quantity, _id, }, i) =>


                    <div key={i} class="card w-96 bg-base-100 shadow-xl border-[1px] border-slate-500 ">
                        <figure><img src={picture} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <p>{description}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-error" onClick={() => habdleManageProDuct(_id)} >Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageProducts;