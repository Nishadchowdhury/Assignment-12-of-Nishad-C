import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import rootUrl from '../../Hooks/RootUrl';
import useTokenJWT from '../../Hooks/useTokenJWT';

const CreateUser = () => {

    const [error, setError] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorCreate,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    const [token] = useTokenJWT(user);


    const onSubmit = async data => {
        setError('');

        const imageUpKey = '3e71ee8402adb8ecc47756f4a172b7ea';
        const { ConfirmPassword, email, password } = data;

        if (password !== ConfirmPassword) {
            return setError('please Type Same password');
        }
        // console.log(data);
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image)
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageUpKey}`;

        fetch(imageUrl, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);

                const photoURL = result.data.url;
                const displayName = data.name;
                (async () => {
                    await createUserWithEmailAndPassword(email, password);
                    await updateProfile({ displayName, photoURL });

                })();

            })
        setError('');
    }

    useEffect(() => {

        if (errorCreate) {
            return setError(errorCreate?.message);
        }
        setError('');
    }, [errorCreate, loading, user])


    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div>

            <div className="flex items-start pt-10 justify-center min-h-screen bg-base-200">
                <div className="flex-col lg:flex-row-reverse">

                    <div className="card w-96 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form className='' onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label py-1 ">
                                        <span className="label-text text-xs">Name</span>
                                    </label>
                                    <input className='input input-bordered' placeholder="name" {...register("name",
                                        {
                                            required: {
                                                value: true,
                                                message: "Name is required"
                                            }
                                        }
                                    )} />

                                    <div className='mt-1  ml-1' >
                                        {errors.name?.type === 'required' && <span className="label-text text-xs-alt text-red-500">{errors.name.message}</span>}
                                        {errors.name?.type === 'pattern' && <span className="label-text text-xs-alt text-red-500">{errors.name.message}</span>}
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label py-1 ">
                                        <span className="label-text text-xs">Email</span>
                                    </label>
                                    <input className='input input-bordered' placeholder="email" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },

                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Please provide a valid email '
                                            }
                                        }
                                    )} />

                                    <div className='mt-1  ml-1' >
                                        {errors.email?.type === 'required' && <span className="label-text text-xs-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text text-xs-alt text-red-500">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label py-1 ">
                                        <span className="label-text text-xs">Password</span>
                                    </label>
                                    <input className='input input-bordered' placeholder='Password' {...register("password",
                                        {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            },

                                            pattern: {
                                                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                                message: 'your passWord must be 6 or longer'
                                            }

                                        })}
                                    />
                                    <div className='mt-1  ml-1' >
                                        {errors.password?.type === 'required' && <span className="label-text text-xs-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'pattern' && <span className="label-text text-xs-alt text-red-500">{errors.password.message}</span>}
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label py-1 ">
                                        <span className="label-text text-xs">Confirm Password</span>
                                    </label>
                                    <input className='input input-bordered' placeholder='Confirm Password' {...register("ConfirmPassword",
                                        {
                                            required: {
                                                value: true,
                                                message: "Confirm Password is required"
                                            },

                                            pattern: {
                                                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                                message: 'your passWord must be 6 or longer'
                                            }

                                        })}
                                    />
                                    <div className="mt-1  ml-1">
                                        {errors.ConfirmPassword?.type === 'required' && <span className="label-text text-xs-alt text-red-500">{errors.ConfirmPassword.message}</span>}
                                        {errors.ConfirmPassword?.type === 'pattern' && <span className="label-text text-xs-alt text-red-500">{errors.ConfirmPassword.message}</span>}
                                    </div>
                                </div>

                                <div className='' >



                                    <div className="form-control">
                                        <label className="label py-1 ">
                                            <span className="label-text text-xs"> Photo</span>
                                        </label>
                                        <input className='pt-[8.5px] cursor-pointer input input-bordered 
                                            block text-sm text-slate-500
                                            file:mr-4 file:py-1 file:px-2
                                            file:rounded-full file:border-0 file:cursor-pointer
                                            file:text-sm file:font-semibold
                                            file:bg-violet-50 file:text-violet-700
                                            hover:file:bg-violet-100' type='file' {...register("photo",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Photo Password is required"
                                                }

                                            })}
                                        />
                                        <div className="mt-1  ml-1">
                                            {errors.photo?.type === 'required' && <span className="label-text text-xs-alt text-red-500">{errors.photo.message}</span>}
                                            {errors.photo?.type === 'pattern' && <span className="label-text text-xs-alt text-red-500">{errors.photo.message}</span>}
                                        </div>
                                    </div>
                                </div>


                                <div className='' >  <input className='btn w-full btn-primary mx-auto block mt-7  input-bordered' type="submit" value={'Submit'} /></div>
                            </form>

                            {error && <span className=" text-red-500 text-center mb-[-10px] ">{error}</span>}

                            <div> <div className="divider mx-auto w-4/5 ">OR</div> </div>

                            <div>

                                <p className='text-xs mt-2 text-center ' > <Link to='/login' className='text-green-400 w-full btn ' > Goto Login </Link> </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;