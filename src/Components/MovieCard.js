import React from "react";
import { IMG_CDM } from "../utils/Constants";
const MovieCard = ({ poster_path }) => {
  return (
    <>
      <div className="mx-1">
        <img alt="movie card" src={IMG_CDM + poster_path} />
      </div>
    </>
  );
};

export default MovieCard;
