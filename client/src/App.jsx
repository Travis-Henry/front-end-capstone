import { useState, useEffect, createContext } from "react";
import React from "react";
import Primary from "./components/primaryCard/Primary";
import Details from "./components/Details";
import MoreToExplore from "./components/MoreToExplore";
import Cast from "./components/Cast";
import Reviews from "./components/reviews/Reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
// import CastV2 from "./components/castContainer";

import NavBar from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  const [movieID, setMovieID] = useState(1);
  const [currentMovie, setCurrentMovie] = useState({});

  const [allMovies, setAllMovies] = useState({});

  let props = {
    movieID,
    setMovieID,
    currentMovie,
    setCurrentMovie,
  };
  //Get request for movie data
  useEffect(() => {
    axios
      .get(`http://localhost:3001/movie/${movieID}`)
      .then((res) => {
        console.log(res.data);
        setCurrentMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [movieID]);

 

  //Gets all movies
  useEffect(() => {
    axios
      .get(`http://localhost:3001/movie`)
      .then((res) => {
        console.log(res.data);
        setAllMovies(res.data);

      })
      .catch((error) => console.log(error));
  }, []);

  const pageContext = [
    // setMovieID: setMovieID,
    currentMovie,
    setCurrentMovie,
  ];

  return (
    <listContextStates.Provider value={pageContext}>
      <div className="App">
    
        <NavBar />
        <Container className="mainContent">
          <Primary currentMovie={currentMovie} />
          <Details details={currentMovie} />
          <MoreToExplore currentMovie={currentMovie} allMovies={allMovies} />
          <Cast currentMovie={currentMovie} />
          <Reviews />
        </Container>
      </div>
    </listContextStates.Provider>
  );
}

export const listContextStates = createContext();
export default App;
