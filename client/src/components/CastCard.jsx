import { Card, Col } from "react-bootstrap";

function CastCard() {
  let actorTest = [
    { actorName: "Jim Caviezel", charName: "Edmond" },
    { actorName: "Guy Pearce", charName: "Fernand" },
    { actorName: "Christopher Adamson", charName: "Maurice" },
    { actorName: "JB Blanc", charName: "Luigi Vampa" },
    { actorName: "Guy Carleton", charName: "Mansion Owner" },
  ];
  return (
    <>
      {actorTest.map((obj) => (
        <Col>
          <Card
            text="white"
            bg="secondary"
            border="warning"
            style={{ width: "227px", height: "16rem" }}
          >
            <Card.Img
              variant="top"
              src="https://picsum.photos/200/300"
              style={{ width: "225px", height: "150px" }}
            />
            <Card.Body>
              <Card.Title>{obj.actorName}</Card.Title>
              <Card.Text>{obj.charName}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CastCard;
