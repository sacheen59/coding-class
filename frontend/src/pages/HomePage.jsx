import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LanguageSchema } from "../schemas/language-schema";
import { addLanguage, fetchAllLanguageItem } from "../utils/server_functions";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const [languages, setLanguages] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LanguageSchema) });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    async function getAllLanguage() {
      const data = await fetchAllLanguageItem();
      setLanguages(data);
    }
    getAllLanguage();
  }, [navigate]);

  async function addItemHandler({ languageName, languageDescription }) {
    const data = await addLanguage(languageName, languageDescription);
    reset();
  }
  return (
    <>
      <ToastContainer />
      <div className="container">
        <h2 className="text-muted mt-3">Programming Languages</h2>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Item
          </button>
        </div>
        {/* modal start */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Item
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit(addItemHandler)}>
                <div className="p-3">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Language Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Python"
                      name="languageName"
                      {...register("languageName")}
                    />
                    {errors.languageName && (
                      <p className="text-danger small-text">
                        {errors.languageName.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Language Description
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="languageDescription"
                      {...register("languageDescription")}
                    ></textarea>
                    {errors.languageName && (
                      <p className="text-danger small-text">
                        {errors.languageName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* modal end */}
        <div className="row g-3">
          {languages.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-3 mt-5 p-3"
              key={item.id}
            >
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">{item.language_name}</h5>
                  <p className="card-text">{item.description}</p>
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
    </>
  );
};

export default HomePage;
