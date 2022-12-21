import React, { useState } from "react";
import "./Css/CreateMovie.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API } from "../backend";

const CreateMovie = () => {
  const [values, setValues] = useState({
    moviename: "",
    rating: "",
    releaseddate: "",
  });
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const createNewMovie = async () => {
    try {
      const res = await Axios.post(`${API}/create/movie`, values);
      setResponse(res.data.msg);
    } catch (err) {
      if (err.response.data.error) {
        setError(err.response.data.error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);

    if (parseInt(values.rating) > 100) {
      alert("Enter the Rating below 100%");
      return;
    }

    createNewMovie(values);
  };
  const removeErr = () => {
    setTimeout(() => {
      setError("");
    }, 3500);
  };
  const removeSuc = () => {
    setTimeout(() => {
      setResponse("");
    }, 3500);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createForm = () => {
    return (
      <form className="form--outer" onChange={handleChange}>
        <label>Movie Name</label>
        <input
          type="text"
          name="moviename"
          placeholder="Enter Movie Name"
        />{" "}
        <br />
        <label>Movie Rating</label>
        <input type="number" name="rating" placeholder="Enter Rating" /> <br />
        <label htmlFor="">Movie Released Date</label>
        <input type="date" name="releaseddate" /> <br />
        <button type="submit" onClick={handleSubmit}>
          Add Movie
        </button>
      </form>
    );
  };
  return (
    <React.Fragment>
      <Link to="/" replace>
        <center>Go Back</center>
      </Link>
      {error && <center className="error">{error}</center>}
      {error && removeErr()}
      {response && <center className="success">{response}</center>}
      {response && removeSuc()}
      {createForm()}
    </React.Fragment>
  );
};

export default CreateMovie;
