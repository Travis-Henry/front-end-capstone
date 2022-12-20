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
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
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
                <h3>Trending</h3>
                <div>
                  <ul id="trending-list">
                    <a href="#">
                      <span>Best of 2022</span>
                    </a>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          Modal body content
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MenuModal;
