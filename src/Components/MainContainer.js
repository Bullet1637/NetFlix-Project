import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowplayingmovies);
  if (movies == null) return;

  const { original_title, overview, poster_path,id } = movies[0];
  return (
    <>
      <div>
        <VideoTitle
          original_title={original_title}
          overview={overview}
          poster_path={poster_path}
        />
        <VideoBackground movieId={id} />
      </div>
    </>
  );
};

export default MainContainer;
