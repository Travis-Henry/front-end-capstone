import { Row, Col, Container, Image, Ratio } from "react-bootstrap";
import "./css/primary.css";
import StarRating from "./StarRating";
import UserRating from "./UserRating";
import Popularity from "./Popularity";
import TopLinks from "./TopLinks";
import IMDbPro from "./IMDbPro";
import AllTopics from "./AllTopics";
import Share from "./Share";

function Primary(props) {
  // console.log(props.currentMovie);
  return (
    <>
      <Container className="primaryCard">
        <Row>
          <Col>
            <Row>
              <Col>
                <Share />
                <AllTopics />
                <IMDbPro />
                <TopLinks />
              </Col>
            </Row>
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
          <Col className="d-none d-lg-block float-end">
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
                src={props.currentMovie.trailer}
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
