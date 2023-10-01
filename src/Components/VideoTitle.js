import React from "react";

const VideoTitle = ({ original_title, overview, poster_path }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[10%] px-12 absolute bg-gradient-to-r from-black text-white">
        {/* <img src={poster_path} alt="poster" /> */}
        <h1 className="text-6xl font-bold">{original_title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div>
          <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
            Play
          </button>
          <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
