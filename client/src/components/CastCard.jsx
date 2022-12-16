import { Card, Col } from "react-bootstrap";

function CastCard(props) {
  // let cast = props.currentMovie.cast;
  console.log(props);
  // console.log(cast);

  return (
    <>
      <Card
        text="white"
        bg="secondary"
        border="warning"
        style={{ width: "227px", height: "16rem" }}
      >
        <Card.Img
          variant="top"
          src={props.items.photo || "/blankProPic2.svg"}
          style={{ width: "225px", height: "150px" }}
        />
        <Card.Body>
          <Card.Title>{props.items.name}</Card.Title>
          <Card.Text>{props.items.character}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CastCard;

// return (
//
//     {props.currentMovie.map((items) => (
//       <Col>
//         <Card
//           text="white"
//           bg="secondary"
//           border="warning"
//           style={{ width: "227px", height: "16rem" }}
//         >
//           <Card.Img
//             variant="top"
//             src="https://picsum.photos/200/300"
//             style={{ width: "225px", height: "150px" }}
//           />
//           <Card.Body>
//             <Card.Title>{items.name}</Card.Title>
//             <Card.Text>{items.character}</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </>
// );
