import "./MoreToExplore.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Star from "./Star";
import Button from 'react-bootstrap/Button';


function MoreToExplore(props) {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {slides.map((slide, index) => {
          return (
            <div className="slider-card">
              <div className="slider-card-image"></div>
              <Star/>
              <p>Movie Title</p>
              <Button variant="secondary">Watch options</Button>
            </div>
          )
        })
        }
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
    </div>
  );
}

export default MoreToExplore;
