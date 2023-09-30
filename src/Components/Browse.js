import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
{/* 
      MainContainer
      video background
      video title
      SecondaryContainer
      moveList * N
      movieCard * N */}
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  );
};

export default Browse;
