import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../schemas/auth";
import { loginUser } from "../../utils/server_functions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  async function submitHandler({ username, password }) {
    const data = await loginUser(username, password);
    localStorage.setItem("token", data.token);
    navigate("/");
  }

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 shadow-sm rounded my-5 p-5">
          <h4 className="text-center">Welcome Back!</h4>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3 mt-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-muted"
              >
                Username
              </label>
              <input
                type="username"
                className="form-control text-sm"
                placeholder="Username"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-danger small-text mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-3 text-muted">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                id="exampleInputPassword1"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-danger small-text mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
          <p className="small-text mt-3 text-center">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="text-decoration-none text-primary pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
