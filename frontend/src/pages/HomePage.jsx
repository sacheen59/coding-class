import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  },[navigate]);
  return (
    <>
      <h1>Homepage</h1>
      <Link to={"/about"}>About</Link>
    </>
  );
};

export default HomePage;
