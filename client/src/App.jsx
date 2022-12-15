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
  const [count, setCount] = useState(0);
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/movie/1")
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);

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
