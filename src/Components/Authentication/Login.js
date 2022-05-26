import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useTokenJWT from '../../Hooks/useTokenJWT';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const imageUploadKey = '157b3358fcb155f65d9ac95a3aaebff6'

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = e => {
        e.preventDefault()

        signInWithEmailAndPassword(e.target.email.value, e.target.password.value)

    }

    const [token] = useTokenJWT(user)

    if (token) {
        navigate(from, { replace: true });
    }

    const handlePassReset = async () => {

        if (email) {
            await sendPasswordResetEmail("email");
            toast.success(`check reset message on ${email}`)
            return
        }

        window.alert('please put a valid email ')

    }




    return (
        <div>

            <div className="hero min-h-[90vh] bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse  w-[400px]  ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-9">

                        <form onSubmit={handleSubmit}>

                            <div className="card-body pb-0 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        onBlur={(e) => setEmail(e.target.value)}
                                        name='email' required type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                    <div>
                                        <label className="label">
                                            <button onClick={handlePassReset} type='button' className="label-text-alt link link-hover">Forgot password?</button>
                                        </label>

                                    </div>
                                    {error && <p className='text-center -mt-1 -mb-6 text-red-500' > {error?.message} </p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className='btn btn-primary' />
                                </div>

                                <p className='text-xs mt-2 text-center' >New to Laparts ? <Link to='/createAcc' className='text-green-400' >  Create New Account</Link> </p>
                            </div>

                        </form>


                        <div> <div className="divider mx-auto w-4/5 ">OR</div> </div>


                        <div>
                            <div className='px-9' >   <SocialLogin /> </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;