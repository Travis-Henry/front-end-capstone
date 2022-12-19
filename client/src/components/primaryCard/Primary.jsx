import { Row, Col, Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "../css/primaryCardCss/primary.css";

function Primary(props) {
  console.log(props.currentMovie);
  return (
    <>
      <Container className="primaryCard">
        <Row>
          <Col lg={{ span: 6, offset: 6 }}>
            <Row>
              <Col>
                <ul>
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
                <div className="d-inline">
                  <a href="">IMBdPro</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <h1>{props.currentMovie.moviename}</h1>
        </Row>
        <Row>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                {props.currentMovie.releasedate}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">{props.currentMovie.rating}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                {props.currentMovie.runtime}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled></Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4} className="">
            <Image thumbnail src={props.currentMovie.poster} />
          </Col>
          <Col lg={7}>
            <video className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/qesn8pV9yu8"
                title="YouTube Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </video>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Primary;
