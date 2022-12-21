import "./css/MoreToExplore.css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
// import Star from "./Star";
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
                    <div className="star-div">
                      <span className="star">
                        {"★"}<span className="star-text">{movie.stars}</span>
                      </span>
                      <button className="star-button">
                        <svg className="star-svg">
                          <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                        </svg>
                      </button>
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
