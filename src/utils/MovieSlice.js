import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        movietrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowplayingmovies = action.payload
        },
        addTailerVideo : (state,action)=>{
            state.movietrailer=action.payload
        }
    }
})

export default MovieSlice.reducer
export const { addNowPlayingMovies, addTailerVideo } = MovieSlice.actions;