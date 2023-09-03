import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, errorCreate] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = data => {
    setError("");

    const { ConfirmPassword, email, password } = data;

    if (password !== ConfirmPassword) {
      return setError("please Type Same password");
    }

    createUserWithEmailAndPassword(email, password);

    setError("");
  };

  useEffect(() => {
    if (errorCreate) {
      return setError(errorCreate?.message);
    }
    setError("");
  }, [errorCreate, loading, user]);

  //console.log(error);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-96 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label py-1 ">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },

                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "error message hudai",
                      },
                    })}
                  />

                  <div className="mt-1  ml-1">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label py-1 ">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },

                      pattern: {
                        value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                        message: "your passWord must be 6 or longer",
                      },
                    })}
                  />
                  <div className="mt-1  ml-1">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label py-1 ">
                    <span className="label-text">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    className="input input-bordered"
                    placeholder="Confirm Password"
                    {...register("ConfirmPassword", {
                      required: {
                        value: true,
                        message: "Confirm Password is required",
                      },

                      pattern: {
                        value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                        message: "your passWord must be 6 or longer",
                      },
                    })}
                  />
                  <div className="mt-1  ml-1">
                    {errors.ConfirmPassword?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.ConfirmPassword.message}
                      </span>
                    )}
                    {errors.ConfirmPassword?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.ConfirmPassword.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  {" "}
                  <input
                    className="btn btn-primary mx-auto block mt-7"
                    type="submit"
                    value={"Submit"}
                  />
                </div>
              </form>

              {error && (
                <span className=" text-red-500 text-center mb-[-10px] ">
                  {error}
                </span>
              )}

              <div>
                {" "}
                <div className="divider mx-auto w-4/5 ">OR</div>{" "}
              </div>

              <div>
                <p className="text-xs mt-2 text-center ">
                  {" "}
                  <Link
                    to="/login"
                    className="text-green-400 w-full btn "
                  >
                    {" "}
                    Goto Login{" "}
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
