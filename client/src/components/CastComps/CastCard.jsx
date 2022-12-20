import { Row, Col, Image } from "react-bootstrap";

function CastCard(props) {
  console.log(props);

  return (
    <>
      <Col md={6}>
        <Row>
          <Col md={3} className="mb-3">
            <Image
              roundedCircle="true"
              src={props.items.photo || "/blankProPic2.svg"}
              style={{ width: "125px", height: "125px" }}
            />
          </Col>
          <Col>
            <div>
              <h2>{props.items.name}</h2>
              <p>{props.items.character}</p>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default CastCard;
