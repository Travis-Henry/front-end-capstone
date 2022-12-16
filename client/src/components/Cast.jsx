import { Container, Row } from "react-bootstrap";
import CastCard from "./CastCard";

function Cast(props) {
  return (
    <Container fluid="lg">
      <Row id="cardGroup">
        <CastCard {...props} />
      </Row>
    </Container>
  );
}

export default Cast;
