import { useEffect } from "react";
import { addTailerVideo } from "../utils/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/Constants";

const useTrailerVideo = ({ movieId }) => {
  console.log("jhgfds",movieId);
    const MovieTrailer = useSelector((store) => store?.movies?.movietrailer);
  const dispatch = useDispatch();
  //   fetching the tailer video and update the store with data
  const getVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video?.name == "Official Trailer"
    );
        // console.log("jhgfdslkjhgfddgjklkjhgf", filterData);
    const Trailer = filterData ? filterData[0] : json.results[0];

    dispatch(addTailerVideo(Trailer));
  };

 
  useEffect(() => {
  if (!MovieTrailer) getVideoTrailer();
  }, []);
 
};
export default useTrailerVideo