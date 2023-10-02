import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(title, movies);

  return (
    <>
      <div className="py-4">
        <h1 className="text-4xl py-4 text-white">{title}</h1>
        <div className="flex">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard poster_path={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;

// <MovieCard key={movie.id} poster_path={movie?.poster_path} />
