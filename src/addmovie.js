import {  useEffect, useState } from "react"
import Movie from "./movie"
import { Link } from "react-router-dom"

function Addmovie({values}){
  const [name,setName]=useState('')
  const [pic,setPic]=useState('')
  const [rating,setRating]=useState('')
  const [summary,setSummary]=useState('')
  const addlist={name,pic,rating,summary}
  // const values=useContext(movieContext)
  const {movie,getMovies}=values
    const moviedetail=()=>
  {                                              
    fetch("https://650bd1f047af3fd22f668770.mockapi.io/movies",{
      method: 'POST',headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(addlist)}).then(()=>{getMovies()})

    
  }
  
  return(
    <div className="addmovie">
      <label>MovieName:</label><input onChange={(event)=>setName(event.target.value)}></input><br></br><br></br>
      <label>MovieImage:</label><input type="file" onChange={(event)=>setPic(URL.createObjectURL(event.target.files[0]))}></input><br></br><br></br>
      <label>movieRating:</label><input type="number" step={0.1} min={0} max={10} onChange={(event)=>setRating(event.target.value)}></input><br></br><br></br>
      <label>MovieSummary:</label><textarea onChange={(event)=>setSummary(event.target.value)}></textarea><br></br><br></br>
      <Link to={"/movie"}><button onClick={moviedetail}>SUBMIT</button></Link>
    </div>
  )
}
export default Addmovie