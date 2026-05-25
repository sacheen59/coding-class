import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../schemas/auth";
import { registerUser } from "../../utils/server_functions";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  async function submitHandler({ username, email, password }) {
    const data = await registerUser(username, email, password);
    localStorage.setItem("token", data.token);
  }

  return (
    <>
      <ToastContainer />
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-4 shadow-sm rounded my-5 p-5">
            <h4 className="text-center">Create An Account</h4>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-3 mt-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-muted"
                >
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
              <div className="mb-3 mt-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-muted"
                >
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
                  <p className="text-danger small-text">
                    {errors.email.message}
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
                  name="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-danger small-text">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-3 text-muted">
                <label htmlFor="exampleInputPassword1" className="form-label">
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
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
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
    </>
  );
};

export default Signup;
