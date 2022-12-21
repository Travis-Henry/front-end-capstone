import { Row, Col, Container, Image, Ratio } from "react-bootstrap";
import "./css/primary.css";
import StarRating from "./StarRating";
import UserRating from "./UserRating";
import Popularity from "./Popularity";

function Primary(props) {
  // console.log(props.currentMovie);
  return (
    <>
      <Container className="primaryCard">
        <Row>
          <Col
            xxl={{ span: 6, offset: 0 }}
            xl={{ span: 6, offset: 0 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 10, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 10, offset: 0 }}
            className="ms-auto"
          >
            <div className="ms-auto">
              <ul className="ms-auto">
                <li>
                  <a href="">Cast & crew</a>
                </li>
                <li>
                  <a href="">User reviews</a>
                </li>
                <li>
                  <a href="">Trivia</a>
                </li>
              </ul>
              <div className="d-inline IMBdPro">
                <a href="">IMBdPro</a>
              </div>
              <button>
                <svg>
                  <path d="M12.036 17.153a4.579 4.579 0 0 1 5.117-5.117c1.97.239 3.604 1.802 3.935 3.758a4.576 4.576 0 0 1-1.042 3.76l.197.19h.556L22.5 21.5a.743.743 0 0 1 0 1.049.743.743 0 0 1-1.049 0l-1.708-1.75v-.556l-.19-.197a4.576 4.576 0 0 1-3.759 1.042c-1.956-.331-3.519-1.964-3.758-3.935zm4.54-3.745a3.163 3.163 0 0 0-3.168 3.168 3.163 3.163 0 0 0 3.168 3.167 3.163 3.163 0 0 0 3.167-3.167 3.163 3.163 0 0 0-3.167-3.168zM8.298 11.972c1.47 0 2.73 1.26 2.73 2.73v3.464c0 1.574-1.26 2.834-2.73 2.834H4.834A2.822 2.822 0 0 1 2 18.166v-3.464c0-1.47 1.26-2.73 2.73-2.73h3.568zm0 1.47H4.834c-.735 0-1.26.525-1.26 1.26v3.464c0 .735.525 1.26 1.26 1.26h3.464c.735 0 1.26-.525 1.26-1.26v-3.464c0-.63-.525-1.26-1.26-1.26zM8.298 2c1.47 0 2.73 1.26 2.73 2.73v3.463c0 1.575-1.26 2.73-2.73 2.73H4.834C3.26 10.923 2 9.768 2 8.193V4.73C2 3.26 3.26 2 4.73 2h3.568zm0 1.47H4.834c-.735 0-1.26.524-1.26 1.26v3.463c0 .735.525 1.26 1.26 1.26h3.464c.735 0 1.26-.525 1.26-1.26V4.73c0-.735-.525-1.26-1.26-1.26zM18.27 2C19.74 2 21 3.26 21 4.73v3.463c0 1.575-1.155 2.73-2.73 2.73h-3.463c-1.47 0-2.73-1.26-2.73-2.73V4.73c0-1.47 1.26-2.729 2.73-2.729h3.464zm0 1.47h-3.463c-.735 0-1.26.524-1.26 1.26v3.463c0 .735.525 1.26 1.26 1.26h3.464c.735 0 1.26-.525 1.26-1.26V4.73c0-.735-.525-1.26-1.26-1.26z"></path>
                </svg>
                <span>All topics</span>
              </button>
              <div className="shareBtn ms-auto">
                <button>
                  <svg>
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{props.currentMovie.moviename}</h1>
            <Row>
              <ul>
                <li>
                  <a href="">{props.currentMovie.releasedate}</a>
                </li>
                <li>
                  <a href="">{props.currentMovie.rating}</a>
                </li>
                <li>
                  <a href="">{props.currentMovie.runtime}</a>
                </li>
              </ul>
            </Row>
          </Col>
          <Col className="d-none d-lg-block">
            <Row>
              <Col>
                <StarRating {...props} />
              </Col>
              <Col>
                <UserRating />
              </Col>
              <Col>
                <Popularity />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={4} sm={4} className="p-0">
            <div>
              <Image fluid src={props.currentMovie.poster} />
            </div>
          </Col>

          <Col lg={8} md={8} sm={8} className="p-0">
            <div className="ratio ratio-4x3">
              <iframe
                frameBorder="1"
                width="100%"
                height="100%"
                allowFullScreen
                src="https://imdb-video.media-imdb.com/vi5872665/1434659607842-pgv4ql-1563552994984.mp4?Expires=1671649852&Signature=qV7~VCNsFr0HU0Pf32SM0QbhJZRBJL0pQrnIFxXvGpXhmWiEYPLcPdGilT9~bapwk02UAE-SM9c~0hDGR2611mx8yPLbdwqcJl~EXWbXL~I37RiEagPl6EYme0oMNdAt-dXn9EYY6nq5T17uGZogpWkYCCFsJd7yenUkzJZ8kZL21JyEoX0gv6xSF0nTxIcpa7UqhC3KJ9hM28Fan0gBk7sIgD9tnRAbBa6JshoCkCYaGPdFOKXnE5JF~rNYtL-ilNC6ZopSdhEUYod2AeTruIMs2wItcc031EevcPSmduAioIKlkBxcu0mXtUqU2KxWo7WWaMWn3drBVndW3fbpDA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.currentMovie.plot}</p>
          </Col>
        </Row>
        <Row className="d-lg-none">
          <Col>
            <StarRating {...props} />
          </Col>
          <Col>
            <UserRating />
          </Col>
          <Col>
            <Popularity />
          </Col>
        </Row>
        <Row>
          <Col>Director:</Col>
        </Row>
        <Row className="primary-details">
          <Col>Writers</Col>
        </Row>
        <Row>
          <Col>Stars</Col>
        </Row>
      </Container>
    </>
  );
}

export default Primary;
