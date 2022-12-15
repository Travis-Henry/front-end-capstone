import "./MoreToExplore.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

function MoreToExplore(props) {
  const slides = [1, 2, 3, 4, 5];
  return (
    <div id="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" />
      <div id="slider">
        {slides.map((slide, index) => {
          return <div className="slider-card"></div>;
        })}
      </div>
      <MdChevronRight size={40} className="slider-icon right" />
    </div>
  );
}

export default MoreToExplore;
