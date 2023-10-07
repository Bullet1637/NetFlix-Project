import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/Constants";
import { addPopularMovie } from "../utils/MovieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const PopularMovies = useSelector((store) => store?.movies?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovie(json?.results));
  };

  useEffect(() => {
   if (!PopularMovies) getPopularMovies();
  }, []);
};
export default usePopularMovies;
