import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleGPTSearch: false,
    movieResult:null,
    movieName: null,
  },
  reducers: {
    toggleGPTAction: (state) => {
      state.toggleGPTSearch = !state.toggleGPTSearch;
    },
    addGPTMovieResult: (state,action)=>{
      const { movieResult, movieName } = action.payload;
      state.movieResult = movieResult;
      state.movieName = movieName;
    }
  },
});

export default gptSlice.reducer
export const { toggleGPTAction, addGPTMovieResult } = gptSlice.actions;