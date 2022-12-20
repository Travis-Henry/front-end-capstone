import "./css/MoreToExplore.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Star from "./Star";
import { CiCircleInfo } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Row, Col, Container, Image } from "react-bootstrap";
import { BsFillBookmarkCheckFill } from "react-icons/bs";


function MoreToExplore(props) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (

    <Row>
      <Col>
        <div id="main-div">
          <div className="main-text">More to explore</div>

          <MdChevronLeft size={50} className="slider-icon left" onClick={slideLeft}/>
          <div id="main-slider-container">
            <div id="slider">
              {props.allMovies.map((movie) => {
                return (
                  <div className="slider-card">
                    <BsFillBookmarkPlusFill size={30} className="bookmark" />
                    <img className="slider-card-image" src={movie.poster} />
                    <div>
                      <Star />
                    </div>
                    <p className="title">{movie.moviename}</p>
                    <Button id="card-button">Watch options</Button>
                    <div className="card-info-div">
                      <CiCircleInfo size={(25)} className="card-info" />
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
          <MdChevronRight size={50} className="slider-icon right" onClick={slideRight} />
        </div>
      </Col>

    </Row>

  );
}

export default MoreToExplore;
