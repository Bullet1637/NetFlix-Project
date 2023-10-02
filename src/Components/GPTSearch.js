import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMAGE } from "../utils/Constants";

const GPTSearch = () => {
  return (
    <>
      <div>
        <div className="absolute -z-10">
          <img src={BG_IMAGE} alt="logo" />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
