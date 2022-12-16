import Nav from "react-bootstrap/Nav";

function Primary(props) {
  console.log(props.currentMovie);
  return (
    <>
      <h1>{props.currentMovie.moviename}</h1>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">{props.currentMovie.releasedate}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">{props.currentMovie.rating}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">{props.currentMovie.runtime}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Primary;
