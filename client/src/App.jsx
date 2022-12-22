import { useState, useEffect, createContext } from "react";
import React from "react";
import Primary from "./components/primaryCard/Primary";
import Details from "./components/DetailsComp/Details";
import MoreToExplore from "./components/M2E/MoreToExplore";
import Cast from "./components/CastComps/Cast";
import Reviews from "./components/reviews/Reviews";
import NavBar from "./components/NavComps/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import ReviewsPage from "./components/reviews/ReviewsPage";

import { Container } from "react-bootstrap";

function App() {
  const [movieID, setMovieID] = useState(1);
  const [currentMovie, setCurrentMovie] = useState({});

  const [allMovies, setAllMovies] = useState([]);

  let props = {
    movieID,
    setMovieID,
    currentMovie,
    setCurrentMovie,
    allMovies,
    setAllMovies,
  };
  //Get request for movie data
  useEffect(() => {
    axios
      .get(`https://imdb-api-ouoz.onrender.com/movie/${movieID}`)
      .then((res) => {
        // console.log(res.data);
        setCurrentMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [movieID]);

  //Gets all movies
  useEffect(() => {
    axios
      .get(`https://imdb-api-ouoz.onrender.com/movie`)
      .then((res) => {
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
    <Router>
      <listContextStates.Provider value={pageContext}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Container className="mainContent">
                  <Primary currentMovie={currentMovie} />
                  <Details details={currentMovie} />
                  <MoreToExplore
                    currentMovie={currentMovie}
                    allMovies={allMovies}
                    setMovieID={setMovieID}
                  />
                  <Cast currentMovie={currentMovie} />
                  {Object.keys(currentMovie).length > 0 &&
                    currentMovie.reviews.length > 0 && <Reviews />}
                </Container>
              }
            ></Route>
            <Route
              path="/reviews"
              element={
                <Container className="mainContent">
                  <ReviewsPage />
                </Container>
              }
            ></Route>
          </Routes>
        </div>
      </listContextStates.Provider>
    </Router>
  );
}

export const listContextStates = createContext();
export default App;
