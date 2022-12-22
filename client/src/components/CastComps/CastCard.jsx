import { Row, Col, Image } from "react-bootstrap";
import "./css/Cast.css";

function CastCard(props) {
  console.log(props);

  return (
    <>
      <Col md={6}>
        <Row md={2}>
          <Col
            id="castImgCol"
            className="ms-2 mb-3 px-0"
            style={{ backgroundColor: "white" }}
          >
            <Image
              roundedCircle="true"
              src={props.items.photo || "/blankActor.svg"}
              style={{
                width: "96px",
                height: "96px",
              }}
            />
          </Col>
          <Col md={8}>
            <h3>{props.items.name}</h3>
            <p>{props.items.character}</p>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default CastCard;
