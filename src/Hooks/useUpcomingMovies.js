import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/Constants";
import { addUpcomingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
