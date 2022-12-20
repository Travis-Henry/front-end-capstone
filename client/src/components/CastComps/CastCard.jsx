import { Row, Col, Image } from "react-bootstrap";

function CastCard(props) {
  console.log(props);

  return (
    <>
      <Col md={6}>
        <Row>
          <Col className="mb-3">
            <Image
              roundedCircle="true"
              src={props.items.photo || "/blankProPic2.svg"}
              style={{ width: "96px", height: "96px" }}
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
