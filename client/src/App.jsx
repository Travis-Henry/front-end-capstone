import { useState } from "react";
import "./App.css";
import Primary from "./components/Primary";
import Details from "./components/Details";
import MoreToExplore from "./components/MoreToExplore";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";

function App() {
  const [count, setCount] = useState(0);

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
