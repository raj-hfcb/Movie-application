import { useContext, useEffect } from "react"
import Movielist from "./movielist"
import { movieContext } from "./App"
import { useState } from "react"

function Movie({values}){ 
  const {getMovies}=values
  const [movie,setMovie]=useState([])

  useEffect(()=>{
  fetch("https://650bd1f047af3fd22f668770.mockapi.io/movies").then(res=>res.json()).then(data=>setMovie(data))
// fetch("http://localhost:4000/movies").then(res=>res.json()).then(data=>setMovie(data))


 },[movie])
  // console.log(movie);
  return(
    <div className="movie">
      {
        movie.map((mv,index)=><Movielist key={index} getMovies={getMovies} movie={mv} id={mv.id} />)
      }
    </div>
  )
}
export default Movie
