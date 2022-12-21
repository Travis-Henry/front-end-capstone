import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import "./Nav.css";

function MenuModal() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Button
        id="menuButton"
        size="sm"
        // variant="outline-warning"
        className="me-2 mb-2 mt-2"
        onClick={() => handleShow()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Menu
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton closeVariant="white" id="modal-header">
          <Modal.Title>
            <img
              src="/imdbLogo.svg"
              width="70"
              height="50"
              className="d-inline-block align-top"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-body">
          <Container>
            <Row>
              <Col>
                <h3>Movies</h3>
                <div>
                  <ul>
                    <a href="#" className="listItem">
                      <span>Release Calendar</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Browse Movies by Genre</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Top Box Office</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Showtimes & Tickets</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Movie News</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>India Movie Spotlight</span>
                    </a>
                    <br></br>
                  </ul>
                </div>
              </Col>
              <Col>
                <h3>Trending</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>Best of 2022</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Top 250 Movies</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Movies</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Top 250 TV Shows</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular TV Shows</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Video Games</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Music Videos</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Podcasts</span>
                    </a>
                  </ul>
                </div>
              </Col>
              <Col>
                <h3>Celebs</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>Born Today</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Celebs</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Celebrity News</span>
                    </a>
                    <br></br>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>TV Shows</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>What on TV & Streaming</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Browse TV Shows by Genre</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>TV News</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>India TV Spotlight</span>
                    </a>
                    <br></br>
                  </ul>
                </div>
              </Col>
              <Col>
                <h3>Awards & Events</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>Oscars</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Best Picture Winners</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Emmys</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>STARmeter Awards</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>San Diego Comic-Con</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>New York Comic-con</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Sundance Film Festival</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Toronto Int'l Film Festival</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Awards Central</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Festival Central</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>All Events</span>
                    </a>
                    <br></br>
                  </ul>
                </div>
              </Col>
              <Col>
                <h3>Community</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>Help Center</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Contributor Zone</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Polls</span>
                    </a>
                    <br></br>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Watch</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>What to Watch</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Latest Trailers</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>IMDb Originals</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>IMDb Picks</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>IMDb Podcasts</span>
                    </a>
                    <br></br>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MenuModal;

{
  /* <h3>Trending</h3>
                <div>
                  <ul class="outer-list">
                    <a href="#" className="listItem">
                      <span>Best of 2022</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Top 250 Movies</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Movies</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Top 250 TV Shows</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular TV Shows</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Video Games</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Music Videos</span>
                    </a>
                    <br></br>
                    <a href="#" className="listItem">
                      <span>Most Popular Podcasts</span>
                    </a>
                  </ul>
                </div> */
}
