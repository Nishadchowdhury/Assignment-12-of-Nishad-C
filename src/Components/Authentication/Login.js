import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
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

    if (user) {
        navigate(from, { replace: true });
    }


    useEffect(() => {



    }, [])

    // if (Loading) {
    //     return <div className='h-screen' > <Loading />  </div>
    // }

    // console.log(user);

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
                                    <input name='email' required type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' required type="text" placeholder="password" className="input input-bordered" />
                                    <div>
                                        <label className="label">
                                            <button className="label-text-alt link link-hover">Forgot password?</button>
                                        </label>

                                    </div>
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