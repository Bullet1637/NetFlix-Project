import React from "react";

import {  useSelector } from "react-redux";

import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const MovieTrailer = useSelector((store) => store?.movies?.movietrailer);
  useTrailerVideo({ movieId });
console.log(MovieTrailer);
  return (
    <>
      <div>
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            MovieTrailer?.key +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
