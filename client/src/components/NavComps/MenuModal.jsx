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
      <Modal
        id="modal-main"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton closeVariant="white" id="modal-header">
          <Modal.Title>
            <a href="#">
              <img
                src="/imdbLogo.svg"
                width="110"
                height="90"
                className="d-inline-block align-top"
              />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-body">
          <Container>
            <Row>
              <Col>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--movie"
                    id="iconContext-movie"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
                  </svg>
                  Movies
                </h3>
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
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--popularity-up"
                    id="trending-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"></path>
                  </svg>
                  Trending
                </h3>
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
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--people"
                    id="celebs-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path>
                  </svg>
                  Celebs
                </h3>
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
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--earth"
                    id="community-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                  </svg>
                  Community
                </h3>
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
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--television"
                    id="tv-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
                  </svg>
                  TV Shows
                </h3>
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
                <br></br>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--video-library"
                    id="watch-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path>
                  </svg>
                  Watch
                </h3>
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
              <Col>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--star-circle-filled"
                    id="awards-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94a.502.502 0 0 1-.75-.54l.85-3.66-2.83-2.45a.505.505 0 0 1 .29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32a.5.5 0 0 1 .28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"></path>
                  </svg>
                  Awards & Events
                </h3>
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
              <Col></Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MenuModal;
