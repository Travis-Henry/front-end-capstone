import "./css/MoreToExplore.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Star from "./Star";
import { CiCircleInfo } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Row, Col, Container, Image } from "react-bootstrap";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiQuestionLine } from "react-icons/ri";



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
          <div className="title-div">
            <p className="main-text">More to explore</p>
            <div className="more-info-div">
              <a href="https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm#">
                <RiQuestionLine size={20} className="moreInfo" />
              </a>
            </div>
          </div>

          <div id="main-slider-container">
            <MdChevronLeft size={50} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
              {props.allMovies.map((movie) => {
                return (
                  <div className="slider-card">
                    <BsFillBookmarkPlusFill size={30} className="bookmark" />
                    <a>
                      <img className="slider-card-image" src={movie.poster} onClick={() => { props.setMovieID(movie.id) }} />
                    </a>
                    <div>
                      <Star />
                    </div>
                    <p className="title">{movie.moviename}</p>
                    <Button id="card-button">
                      <div className="button-text"></div>
                    </Button>
                    <div className="card-info-div">
                      <CiCircleInfo size={(25)} className="card-info" />
                    </div>
                  </div>
                )
              })
              }
            </div>
            <MdChevronRight size={50} className="slider-icon right" onClick={slideRight} />
          </div>
        </div>
      </Col>

    </Row>

  );
}

export default MoreToExplore;
