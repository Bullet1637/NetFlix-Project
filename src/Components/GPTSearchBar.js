import React, { useRef } from 'react'
import { lang } from '../utils/LanguageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/OpenAI';
import { API_OPTION } from '../utils/Constants';
import { addGPTMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store?.config?.lang);
 const searchText = useRef()
const dispatch = useDispatch()
const getTMDBSearchData = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" + movie + "&page=1",
    API_OPTION
  );
  const json = await data.json();
  return json.results
};

  const handleGPTSearchClick =async()=>{
    // console.log(searchText.current.value);
    // make api call to get movie results 

    const gptQuery = "act as a movie Recommendation system and suggest same movies for the query :" +  searchText.current.value + " only give me five name of movies comma seperated ,like the example given ahead , example result : Dhoom, maine pyar kiu kiya, golmal , race , kaho na pyar he"
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResult.choices){
      // error message 
    }
    // console.log(gptResult.choices);
    // "Get Out, Shaun of the Dead, Zombieland, Scary Movie, The Cabin in the Woods";
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",")
    // console.log(gptMovies);
   
    // for each movie i will search in TMDB api
    const promiseArray = gptMovies.map((mov) => getTMDBSearchData(mov)); 
   
    const TMDBResults =await Promise.all(promiseArray)
    // console.log(TMDBResults);
    dispatch(
      addGPTMovieResult({ movieResult: TMDBResults, movieName: gptMovies })
    );
  }
  return (
    <>
      <div className="pt-[10%] flex justify-center ">
        <form
          className="w-1/2 bg-black grid grid-cols-12 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 rounded-lg"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 px-4 py-2 m-4 bg-red-600   text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
}

export default GPTSearchBar
