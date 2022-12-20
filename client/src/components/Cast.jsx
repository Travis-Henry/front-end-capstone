import { Container, Row } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
import CastCard from "./CastCard";

function Cast(props) {
  // console.log(props);
  const cast = props.currentMovie.cast;
  // console.log(cast);
  return (
    <Container id="castContainer" fluid="lg">
      <div>
        <h1 id="castHeading">
          Top Cast
          <svg
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron"
            id="iconContext-chevron-right-inline"
            viewBox="0 0 24 24"
            fill="#f5c518"
            role="presentation"
          >
            <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
          </svg>
        </h1>
      </div>
      <Row>{cast && cast.map((items) => <CastCard items={items} />)}</Row>
    </Container>
  );
}

export default Cast;
