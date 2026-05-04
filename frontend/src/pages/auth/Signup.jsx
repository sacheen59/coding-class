import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../schemas/auth";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  function submitHandler(data) {
    console.log(data);
  }

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 shadow-sm rounded my-5 p-5">
          <h4 className="text-center">Create An Account</h4>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div class="mb-3 mt-4">
              <label for="exampleInputEmail1" className="form-label text-muted">
                Username
              </label>
              <input
                type="text"
                className="form-control text-sm"
                placeholder="Username"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="username"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-danger small-text">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div class="mb-3 mt-4">
              <label for="exampleInputEmail1" className="form-label text-muted">
                Email address
              </label>
              <input
                type="email"
                className="form-control text-sm"
                placeholder="something@example.com"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-danger small-text">{errors.email.message}</p>
              )}
            </div>
            <div class="mb-3 text-muted">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-danger small-text">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div class="mb-3 text-muted">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                name="confirmPassword"
                id="exampleInputPassword1"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-danger small-text">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">
                SignUp
              </button>
            </div>
          </form>
          <p className="small-text mt-3 text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-decoration-none text-primary pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
