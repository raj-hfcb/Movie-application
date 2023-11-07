import React from 'react'
import { useParams,useNavigate } from 'react-router'
import { useEffect, useState } from "react"
import Movie from "./movie"
import { Link } from "react-router-dom"


function Updatemv() {

  
  const [mv,setMv]=useState(null) 
      const {id}=useParams() 

      useEffect(()=>{
        fetch(`https://650bd1f047af3fd22f668770.mockapi.io/movies/${id}`).then(data=>data.json()).then((data)=>setMv(data))
      },[id])

    
  return (
    
    <div className="addmovie">   
      {mv?<EditMovieForm movie={mv}/>:"Loading..."}

    </div>
  )
}

function EditMovieForm({movie})
{

  const [name,setName]=useState(movie.name)
  const [pic,setPic]=useState(movie.pic)
  const [rating,setRating]=useState(movie.rating)
  const [summary,setSummary]=useState(movie.summary)
  const updateMovie={name,pic,rating,summary}
  const navigate=useNavigate()
  function Updated()
  {
    fetch(`https://650bd1f047af3fd22f668770.mockapi.io/movies/${movie.id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateMovie)}).then(()=>navigate("/movie"))
  }

  return(
    <div>
      <label>MovieName:</label> 
      <input value={name} onChange={(event)=>setName(event.target.value)}></input><br></br><br></br>
      <label>MovieImage:</label>
      <input value={pic} onChange={(event)=>setPic(event.target.value)} ></input><br></br><br></br>
      <label>movieRating:</label>
      <input value={rating}  type="number" step={0.1} min={0} max={10} onChange={(event)=>setRating(event.target.value)} ></input><br></br><br></br>
      <label>MovieSummary:</label>
      <textarea value={summary} onChange={event=>setSummary(event.target.value)}></textarea><br></br><br></br>
      <button onClick={Updated} >UPDATE</button>
    </div>
  )

}
export default Updatemv