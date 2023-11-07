// my try
import { Button, Card, CardActions, CardContent, CardMedia, IconButton } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router';
import Badge from '@mui/material';


function Movielist({id,movie,getMovies}) {
  const navigate=useNavigate()

  // const values=useContext(movieContext)
  // const {movies,getMovies}=values

  
  
  const [show,setShow]=useState(false)
  const styles={display:show?"block":"none"}

  const [like,setLike]=useState(10)
  const [disLike,setDislike]=useState(10)

  
  const deletecontent=(id)=>{
    fetch(`https://650bd1f047af3fd22f668770.mockapi.io/movies/${id}`,{method:'DELETE'}).then(()=>{getMovies()})
    // fetch(`http://localhost:4000/movies/${id}`,{method:'DELETE'}).then(()=>console.log('Deleted'))
  }

  return (
    <Card className='movie-container'>
      <img className='picture' src={movie.pic}/>
      <CardContent className='movie-spec'>
        <h1>{movie.name}</h1>
        <h2>{movie.rating}</h2>
      </CardContent>
      <div id="footer">
      <CardMedia style={{fontFamily:"fantasy"}}>
        {/* <Badge badgeContent={like} color="secondary"> 👍</Badge> */}
        <IconButton onClick={()=>setLike(like+1)}>{like}👍</IconButton>
        <IconButton onClick={()=>setDislike(disLike+1)}>👎{disLike}</IconButton>
      </CardMedia>
      <CardActions>
        <IconButton onClick={()=>navigate(`/updatemv/${movie.id}`)}><EditNoteIcon/></IconButton>
      <IconButton onClick={()=>{deletecontent(id)}}><DeleteIcon/></IconButton> 
      <Button onClick={()=>{setShow(!show)}}>{show?<ExpandMoreSharpIcon/>:<ExpandLessSharpIcon/>}</Button>
      

      </CardActions>
      <p style={styles}>{movie.summary}</p>
      </div>
    </Card>
  )
}

export default Movielist
