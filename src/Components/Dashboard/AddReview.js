import React, { useContext, useState } from 'react';
import { userContextFirebase } from '../../App';
import { commonButton } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query';
import { async } from '@firebase/util';

const AddReview = () => {

    const [user, loading, error] = useContext(userContextFirebase);


    const { data: reviews, isLoading, refetch } = useQuery('reviewData', () => fetch(`${rootUrl}/getReview/${user.email}`).then(res => res.json()));

    console.log(reviews);

    const handleSubmit = e => {
        e.preventDefault();


        const review = {
            userName: user?.displayName,
            userEmail: user?.email,
            userImg: user?.photoURL,
            rating: e.target.rating.value,
            text: e.target.text.value,
        }

        fetch(`${rootUrl}/addReview`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    refetch();
                    toast.success(`🦄 thanks for rating `, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }
    return (
        <div className='flex justify-start flex-col  items-center min-h-[90vh]' >

            <form onSubmit={handleSubmit} className='' >

                <div className='flex justify-center mt-9 max-w-[600px] lg:w-[600px] p-3 rounded-lg  '  >
                    <div className='lg:w-3/4 w-80 flex flex-col justify-center gap-9 border-[1px] border-slate-500 p-4 rounded-xl ' >
                        <div className='flex  items-center ' >
                            <select required name='rating' type="text" placeholder="Type here" class="input input-bordered w-[30%] " >
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                            </select>
                            <h1 className='text-center ml-7 ' >select Your Rating
                                <svg className=' ml-2 w-7 inline' viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="m528.5 171.5-146.4-21.29-65.43-132.4C310.9 5.971 299.4-.002 287.1 0c-10.5 0-22 5.899-27.8 17.8l-65.5 132.4-146.33 21.3c-26.27 3.8-36.79 36.1-17.75 54.6l105.9 102.1-25.02 146.4c-3.6 20.7 13 37.4 31.6 37.4 4.932 0 10.01-1.172 14.88-3.75L288 439.6l130.9 68.7c4.865 2.553 9.926 3.713 14.85 3.713 18.61 0 35.21-16.61 31.65-37.41l-25.05-145.5 105.9-102.1C565.3 207.6 554.8 175.3 528.5 171.5zM390.2 320.6l22.4 130.1-117.2-61.48a16.007 16.007 0 0 0-14.87 0L163.4 450.7l22.4-130.1c.9-5.2-1.7-10.5-4.6-14.2l-94.7-92.09 130.9-19.04c5.2-.77 9.7-4.07 12-8.77L288 67.99l58.59 118.5a16 16 0 0 0 12.04 8.744l130.9 19.04-94.7 92.09C391 310.1 389.3 315.4 390.2 320.6z" fill="#00c427" class="fill-000000"></path></svg>
                                .</h1>
                        </div>
                        <textarea required name='text' class="textarea textarea-bordered" placeholder="Bio"></textarea>
                        <button className={commonButton} > update </button>
                    </div>
                </div>

            </form>

            <div className='flex flex-wrap justify-center gap-4 mt-10' >



                {
                    reviews?.map(({ rating, text, userEmail, userImg, userName }, i) =>

                        <div key={i} class="card lg:w-96 bg-base-100 shadow-xl border-[1px] border-slate-500">
                            <div class="card-body  ">
                                <h2 class="card-title">
                                    Your Rating
                                    <div class="badge badge-secondary text-sm mt-1 "> {rating}</div>
                                    <svg className=' -mt-[1px] w-7 inline' viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="m528.5 171.5-146.4-21.29-65.43-132.4C310.9 5.971 299.4-.002 287.1 0c-10.5 0-22 5.899-27.8 17.8l-65.5 132.4-146.33 21.3c-26.27 3.8-36.79 36.1-17.75 54.6l105.9 102.1-25.02 146.4c-3.6 20.7 13 37.4 31.6 37.4 4.932 0 10.01-1.172 14.88-3.75L288 439.6l130.9 68.7c4.865 2.553 9.926 3.713 14.85 3.713 18.61 0 35.21-16.61 31.65-37.41l-25.05-145.5 105.9-102.1C565.3 207.6 554.8 175.3 528.5 171.5zM390.2 320.6l22.4 130.1-117.2-61.48a16.007 16.007 0 0 0-14.87 0L163.4 450.7l22.4-130.1c.9-5.2-1.7-10.5-4.6-14.2l-94.7-92.09 130.9-19.04c5.2-.77 9.7-4.07 12-8.77L288 67.99l58.59 118.5a16 16 0 0 0 12.04 8.744l130.9 19.04-94.7 92.09C391 310.1 389.3 315.4 390.2 320.6z" fill="#00c427" class="fill-000000"></path></svg>
                                </h2>
                                <p>{text}</p>

                            </div>
                        </div>

                    )
                }

            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default AddReview;



