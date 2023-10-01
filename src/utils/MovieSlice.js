import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        movietrailer:null,
        popularMovies:null,
        topratedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowplayingmovies = action.payload
        },
        addTailerVideo : (state,action)=>{
            state.movietrailer=action.payload
        },
        addPopularMovie : (state,action)=>{
           state.popularMovies = action.payload
        },
        addTopRatedMovie : (state,action)=>{
            state.topratedMovies = action.payload
        },
        
        addUpcomingMovie: (state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
})

export default MovieSlice.reducer
export const {
  addNowPlayingMovies,
  addTailerVideo,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = MovieSlice.actions;