import React from "react";
import { IMG_CDM } from "../utils/Constants";
const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null
    return (
      <>
        <div className="mx-3 w-[200px] h-[300px] ">
          <img alt="movie card" src={IMG_CDM + poster_path} />
        </div>
      </>
    );
};

export default MovieCard;
