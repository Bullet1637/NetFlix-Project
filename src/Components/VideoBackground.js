import React, { useEffect } from "react";
import { API_OPTION } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTailerVideo } from "../utils/MovieSlice";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const MovieTrailer = useSelector((store) => store?.movies?.movietrailer);
  useTrailerVideo({ movieId });

  return (
    <>
      <div>
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" + MovieTrailer?.key + "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      ;
    </>
  );
};

export default VideoBackground;
