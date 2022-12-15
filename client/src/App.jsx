import { useState, useEffect } from "react";
import "./App.css";
import Primary from "./components/Primary";
import Details from "./components/Details";
import MoreToExplore from "./components/MoreToExplore";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [movieID, setMovieID] = useState(1);
  const [currentMovie, setCurrentMovie] = useState({});

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

  const pageData = {
    setMovieID: setMovieID,
    currentMovie: currentMovie,
  };

  return (
    <div className="App">
      <Primary />
      <Details />
      <MoreToExplore />
      <Cast />
      <Reviews />
    </div>
  );
}

export default App;
