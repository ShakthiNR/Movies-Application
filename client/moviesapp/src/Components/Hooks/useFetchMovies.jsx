import { useState } from "react";
import Axios from "axios";
import { API } from "../../backend";
import { useEffect } from "react";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await Axios.get(`${API}/get/movies`);
      setMovies(res.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [movies, setMovies, error, loading];
};

export default useFetchMovies;
