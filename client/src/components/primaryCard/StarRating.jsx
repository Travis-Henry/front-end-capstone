import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/StarRating.css";

export default function StarRating(props) {
  return (
    <>
      <Row className="starRating justify-content-center">
        <Col className="justify-content-center">
          <span className="d-flex">IMDb RATING</span>
        </Col>
      </Row>
      <Row className="starRating">
        <button>
          <Row className="align-items-center">
            <Col xl="auto" lg="auto" md="auto" sm="auto">
              <Row className="align-items-center">
                <Col>
                  <svg>
                    <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                  </svg>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <span className="starStyle">{props.currentMovie.stars}</span>
                  <span className="outOf">/10</span>
                </Col>
              </Row>
              <Row className="totalReviews">
                <Col>
                  <span>{props.currentMovie.number_of_star_ratings}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </button>
      </Row>
    </>
  );
}
