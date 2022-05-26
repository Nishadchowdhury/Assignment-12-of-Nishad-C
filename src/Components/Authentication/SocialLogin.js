import React, { useEffect, useState } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useTokenJWT from '../../Hooks/useTokenJWT';
import Loading from '../Shared/Loading/Loading';


const SocialLogin = () => {

    const [error, setError] = useState('')

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userF, loadingF, errorF] = useSignInWithFacebook(auth);

    const [token] = useTokenJWT(userF || userG);



    useEffect(() => {

        if (errorG) {
            setError(errorG?.message)
            return;
        } else if (errorF) {
            setError(errorF?.message)
            return;
        }

        if (!errorG || !errorF) {
            setError('');
        }
    }, [errorG, errorF, loadingG, loadingF]);


    if (loadingG || loadingF) {
        return <div className="h-16 overflow-hidden"> <Loading /> </div>
    }

    if (token) {
        return <Navigate to="/" />;
    }

    return (

        <div>
            {error && <p className='text-sm text-center text-red-500 mb-2 '> {error} </p>}
            <div className="flex flex-row gap-2">
                <button onClick={() => signInWithGoogle()} className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></svg>
                    Google
                </button>

                <button onClick={() => signInWithFacebook()} className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                    <span className='text-white'>
                        <svg className='text-white invert' width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </g>
                        </svg>

                    </span>
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;