import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleGPTSearch: false,
  },
  reducers: {
    toggleGPTAction: (state) => {
      state.toggleGPTSearch = !state.toggleGPTSearch;
    },
  },
});

export default gptSlice.reducer
export const { toggleGPTAction } = gptSlice.actions;