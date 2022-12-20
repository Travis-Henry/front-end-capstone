import { Row, Col, Image } from "react-bootstrap";

function CastCard(props) {
  // let cast = props.currentMovie.cast;
  console.log(props);
  // console.log(cast);

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

// return (
//   <>
//     <Card
//       text="white"
//       bg="secondary"
//       border="warning"
//       style={{ width: "227px", height: "16rem" }}
//     >
//       <Card.Img
//         variant="top"
//         src={props.items.photo || "/blankProPic2.svg"}
//         style={{ width: "225px", height: "150px" }}
//       />
//       <Card.Body>
//         <Card.Title>{props.items.name}</Card.Title>
//         <Card.Text>{props.items.character}</Card.Text>
//       </Card.Body>
//     </Card>
//   </>
// );
