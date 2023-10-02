import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"
import MovieSlice from "./MovieSlice"
import gptSlice from "./gptSlice";
import ConfigSlice from "./ConfigSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
    gptSearch: gptSlice,
    config:ConfigSlice,
  },
});

export default appStore