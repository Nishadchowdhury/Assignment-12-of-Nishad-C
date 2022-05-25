import React, { useEffect } from 'react';
import rootUrl from '../../Hooks/RootUrl';

const CancelOrderModal = ({ dataForModal, setDataForModal }) => {


    const { picture, _id, Product } = dataForModal;

    const handleDelete = () => {


        fetch(`${rootUrl}/deleteMyOrder/${_id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setDataForModal(null);
            })

    }
    return (
        <div>


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative card card-side bg-base-100 shadow-xl">
                    <label for="delete-order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <figure className=""  ><img src={picture} className='w-40 rounded-2xl h-full overflow-hidden' alt="Movie" /></figure>

                    <div class="card-body pb-0 pr-0">
                        <h2 class="card-title text-warning "> {Product} </h2>
                        <p className='text-error'>Are Your Sure ? </p>
                        <div class="card-actions justify-end">
                            <button
                                class="btn btn-error mt-8"
                                onClick={handleDelete}
                            >Confirm cancel order !</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CancelOrderModal;