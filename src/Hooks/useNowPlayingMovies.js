
import { API_OPTION } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useNowPlayingMovies =()=>{
     const dispatch =useDispatch()
    const getNowPlayingMovies = async()=>{
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing",API_OPTION
       );
       const json =await data.json()
       dispatch(addNowPlayingMovies(json?.results))
    } 

    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}
export default useNowPlayingMovies