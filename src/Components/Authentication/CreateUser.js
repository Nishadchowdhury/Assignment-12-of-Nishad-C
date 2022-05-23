import React from 'react';


import { useForm } from 'react-hook-form';

const CreateUser = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);



    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card w-96 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form className='' onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input className='input input-bordered' placeholder="email" {...register("email",
                                        {
                                            required: true,
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'error message'
                                            }
                                        }
                                    )} />

                                    {errors.email?.type === 'required' && "First name is required"}
                                    {errors.email?.type === 'pattern' && "please Provide a Valid Email"}
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input className='input input-bordered' placeholder='Password' {...register("lastName",
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
                                    {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}
                                    {errors.lastName?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}
                                </div>


                                <input className='btn btn-primary' type="submit" value={'Submit'} />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;