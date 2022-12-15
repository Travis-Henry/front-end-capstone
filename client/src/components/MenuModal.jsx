import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MenuModal() {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Button
        size="lg"
        variant="outline-warning"
        className="me-2 mb-2 mt-2"
        onClick={() => handleShow()}
      >
        Menu
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src="./public/imdbLogo.svg"
              width="70"
              height="50"
              className="d-inline-block align-top"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

export default MenuModal;
