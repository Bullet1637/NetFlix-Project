import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const NowPlaying = useSelector((store) => store?.movies?.nowplayingmovies);
  const PopularMovies = useSelector((store) => store?.movies?.popularMovies);
  const TopRatedMovies = useSelector((store) => store?.movies?.topratedMovies);
  const UpComingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  console.log("PopularMovies", PopularMovies);
  console.log("NowPlaying", NowPlaying);
  console.log("TopRatedMovies", TopRatedMovies);
  console.log("UpComingMovies", UpComingMovies);

  return (
    <>
      {NowPlaying && (
        <div className="bg-black">
          <div className="-mt-80 pl-12 relative z-20 ">
            <MovieList title="Now Playing" movies={NowPlaying} />
            <MovieList title="Popular Movies" movies={PopularMovies} />
            <MovieList title="Top Rated Movies" movies={TopRatedMovies} />
            <MovieList title="UpComing Movies" movies={UpComingMovies} />
          </div>
        </div>
      )}

      {/* //MovieList : popule 
      //movCard 
      //MovieList : nowplaying 
      //MovieList :documentry 
      //MovieList : web series */}
    </>
  );
};

export default SecondaryContainer;
