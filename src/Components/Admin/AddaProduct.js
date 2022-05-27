import React, { useState } from 'react';
import { commonButton, headerClass } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddaProduct = () => {

    const [loading, setLoading] = useState(false);


    const handleAddProduct = e => {
        e.preventDefault()

        const newProduct = {
            description: e.target.description.value,
            minimum: e.target.minimum.value,
            name: e.target.name.value,
            picture: e.target.picture.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
        }

        setLoading(true)
        fetch(`${rootUrl}/allProducts`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('product add success ', newProduct?.name)
                e.target.reset()
                setLoading(false)
            })


    }
    return (
        <div className='pt-3' >

            <h1 className={headerClass}> Add a product </h1>
            <form onSubmit={handleAddProduct} className='lg:w-5/6 w-full' >

                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <textarea required name="description" cols="30" rows="10" type="text" placeholder="description" class={` text-white input input-bordered w-full  flex-1`}></textarea>

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input required name='minimum' type="number" min={1} placeholder="minimum sellable quantity" class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input required name='name' type="text" placeholder="name " class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input required name='picture' type="text" placeholder="picture url" class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input required name='price' type="number" min={1} placeholder="price for single unite" class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input required name='quantity' type="number" min={1} placeholder="total quantity" class={` text-white input input-bordered w-full  flex-1`} />

                        <input disabled={loading} className={commonButton} type="submit" value={'Add'} />
                    </div>
                </div>

            </form>

        </div>
    );
};

export default AddaProduct;