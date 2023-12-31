import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/Constants";
import { addTopRatedMovie } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
   const TopRatedMovies = useSelector((store) => store?.movies?.topratedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json?.results));
  };

  useEffect(() => {
  if (!TopRatedMovies) getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
