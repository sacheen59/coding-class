import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const LANGUAGES = [
    {
      id: "1",
      languageName: "Python",
      description: "This is python programming language.",
    },
    {
      id: "2",
      languageName: "React",
      description: "This is React Framework.",
    },
    {
      id: "3",
      languageName: "Javascript",
      description: "This is Javascript programming language.",
    },
    {
      id: "4",
      languageName: "Dart",
      description: "This is Dart programming language.",
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="container">
      <h2 className="text-muted mt-3">Programming Languages</h2>
      <div className="d-flex align-items-center gap-2">
        {LANGUAGES.map((item) => (
          <div className="col-md-3 shadow mt-5 p-3" key={item.id}>
            <div className="card">
              <div class="card-body">
                <h5 class="card-title">{item.languageName}</h5>
                <p class="card-text">{item.description}</p>
                <div className="d-flex gap-2 justify-content-end">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
