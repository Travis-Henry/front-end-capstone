import { Container, Row } from "react-bootstrap";
import CastCard from "./CastCard";

function Cast() {
  return (
    <Container fluid="lg">
      <Row id="cardGroup">
        <CastCard />
      </Row>
    </Container>
  );
}

export default Cast;
