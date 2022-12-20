import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/Popularity.css";

export default function Popularity() {
  return (
    <>
      <Row className="popularity">
        <Col>
          <p>POPULARITY</p>
        </Col>
      </Row>
      <Row className="popularity">
        <button>
          <svg>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"></path>
          </svg>
          <span>998</span>
          <svg>
            <path d="M8.71 12.29L11.3 9.7a.996.996 0 0 1 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
          </svg>
          <span>296</span>
        </button>
      </Row>
    </>
  );
}
