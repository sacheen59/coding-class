import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 shadow-sm rounded my-5 p-5">
          <h4 className="text-center">Welcome Back!</h4>
          <form>
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
              />
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
              />
            </div>
            <div class="d-grid">
              <button class="btn btn-primary" type="button">
                Login
              </button>
            </div>
          </form>
          <p className="small-text mt-3 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-decoration-none text-primary pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
