import { useState, useEffect, createContext } from "react";
import React from "react";
import "./App.css";
import Primary from "./components/Primary";
import Details from "./components/Details";
import MoreToExplore from "./components/MoreToExplore";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import CastV2 from "./components/castContainer";

import NavBar from "./components/Navbar";

function App() {
  const [movieID, setMovieID] = useState(1);
  const [currentMovie, setCurrentMovie] = useState({});

  let props = {
    movieID,
    setMovieID,
    currentMovie,
    setCurrentMovie,
  };
  //Get request for movie data
  useEffect(() => {
    axios
      .get(`https://imdb-api-ouoz.onrender.com/${movieID}`)
      .then((res) => {
        console.log(res.data);
        setCurrentMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [movieID]);

  const pageContext = [
    // setMovieID: setMovieID,
    currentMovie,
    setCurrentMovie,
  ];

  return (
    <listContextStates.Provider value={pageContext}>
      <div className="App">
        <NavBar />
        <Primary currentMovie={currentMovie} />
        <Details details={currentMovie} />
        <MoreToExplore currentMovie={currentMovie}/>
        <Cast currentMovie={currentMovie} />
        <Reviews />
      </div>
    </listContextStates.Provider>
  );
}

export const listContextStates = createContext();
export default App;
