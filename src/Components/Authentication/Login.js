import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <div class="hero min-h-[90vh] bg-white">
                <div class="hero-content flex-col lg:flex-row-reverse  w-[400px]  ">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-9">
                        <div class="card-body pb-0 ">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input required type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input required type="text" placeholder="password" class="input input-bordered" />
                                <div>
                                    <label class="label">
                                        <button class="label-text-alt link link-hover">Forgot password?</button>
                                    </label>

                                </div>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>

                            <p className='text-xs mt-2 text-center' >New to Doctor Portal ? <Link to='/createAcc' className='text-green-400' >  Create New Account</Link> </p>
                        </div>



                        <div> <div class="divider mx-auto w-4/5 ">OR</div> </div>


                        <div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;