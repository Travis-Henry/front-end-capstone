import { Card } from "react-bootstrap";

function CastCard() {
  let actorTest = [
    { actorName: "Jim Caviezel", charName: "Edmond" },
    { actorName: "Guy Pearce", charName: "Fernand" },
    { actorName: "Christopher Adamson", charName: "Maurice" },
    { actorName: "JB Blanc", charName: "Luigi Vampa" },
  ];
  return (
    <>
      {actorTest.map((obj) => (
        <Card
          text="white"
          bg="secondary"
          border="warning"
          style={{ width: "18rem", height: "18rem" }}
        >
          <Card.Img
            variant="top"
            src="./public/blankProPic2.svg"
            style={{ width: "225px", height: "150px" }}
          />
          <Card.Body>
            <Card.Title>{obj.actorName}</Card.Title>
            <Card.Text>{obj.charName}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CastCard;
