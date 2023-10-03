import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GPTMovieSuggestion = () => {
  const { movieResult, movieName } = useSelector((store) => store.gptSearch);
  console.log(movieResult);
  console.log(movieName);
  if (!movieName) return null;
  return (
    <>
      <div className="text-black bg-black p-4 m-4 bg-opacity-90">
        <div>
          {movieName?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResult[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GPTMovieSuggestion;
