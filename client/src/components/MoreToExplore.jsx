import "./MoreToExplore.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Star from "./Star";
import { CiCircleInfo } from "react-icons/ci";
import Button from 'react-bootstrap/Button';


function MoreToExplore(props) {

  console.log("current movie", props.currentMovie)
  const slides = [{image:'https://picsum.photos/200/299', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/301', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/302', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/303', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/304', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/306', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/307', title:"The Count of Monte Cristo"},
  {image:'https://picsum.photos/200/305', title:"The Count of Monte Cristo"}];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className="main-text">More to explore</div>

    <div id="main-slider-container">
      <MdChevronLeft size={50} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {slides.map((slide, index) => {
          return (
            
              

            <div className="slider-card">
              <img className="slider-card-image" src={slide.image}></img>
              <div></div>
              <Star/>
              <p className="title">{slide.title}</p>
              <Button id="card-button">Watch options</Button>
              <div className="card-info-div">
                <CiCircleInfo size={(25)} className="card-info"/>
              </div>
            </div>
          )
        })
        }
      </div>
      <MdChevronRight size={50} className="slider-icon right" onClick={slideRight} />
    </div>
    </div>
  );
}

export default MoreToExplore;

