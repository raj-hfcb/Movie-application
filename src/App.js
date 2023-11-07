import { AppBar, Button, Paper, ThemeProvider, Toolbar, createTheme } from "@mui/material"
import { Routes,Route, useNavigate } from "react-router"
import Home from "./home"
import Addmovie from "./addmovie"
import Movie from "./movie"
import { useEffect } from "react"
import { useState } from "react"
import './App.css'
import Updatemv from "./updatemv"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// export const movieContext=createContext()

function App(){
    const [movie,setMovie]=useState([])
    const navigate=useNavigate()
     const values={movie:movie,getMovies:getMovies}

    //Theming
    const [mode,setMode]=useState('light')
    const theme=createTheme({
        palette:{
            mode:mode
        }
    })

    useEffect(()=>{getMovies()},[])
    function getMovies()
    {
        fetch("https://650bd1f047af3fd22f668770.mockapi.io/movies").then(res=>res.json()).then(data=>setMovie(data))

        // fetch("http://localhost:4000/movies").then(res=>res.json()).then(data=>setMovie(data))
    }
        

    return(
        
        <ThemeProvider theme={theme}>
            <Paper elevation={2} style={{minHeight:"100vh"}}>        
                <div id="app">
            
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={()=>{navigate("/")}}>Home</Button>
                    <Button color="inherit" onClick={()=>{navigate("/movie")}}>Movie</Button>
                    <Button color="inherit" onClick={()=>{navigate("/addmovie")}}>Addmovie</Button>
                    <Button color="inherit" onClick={()=>{setMode(mode=="light"?"dark":"light")}}>{mode=="light"?<DarkModeIcon></DarkModeIcon>:<LightModeIcon/>}{mode=="light"?"Dark":"light"}Mode</Button>
                </Toolbar>
            </AppBar>
            {/* <movieContext.Provider value={values}> */}
            <Routes>
                <Route path="/movie" element={<Movie values={values}/>}></Route>
            <Route path="/addmovie" element={<Addmovie values={values}/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/updatemv/:id" element={<Updatemv/>}></Route>
            </Routes>
            {/* </movieContext.Provider> */}

        </div>
        </Paper>

        </ThemeProvider>

    )
}
export default App