import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  InputGroup,
} from "react-bootstrap";
import MenuModal from "./MenuModal";
import './Nav.css';

function NavBar() {
  return (
    <Navbar key="lg" bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container id="navFull">
        <img
          src="/imdbLogo.svg"
          width="64"
          height="32"
          className="d-inline-block align-top"
        ></img>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav id="navTopTotal" className="justify-content-center flex-grow-1">
              {/* <Nav.Link href="#action2">Link</Nav.Link> */}

              <MenuModal />
              <InputGroup size="sm" className="d-flex">
                <Form.Control
                  id="searchBar"
                  type="search"
                  placeholder="Search IMDb"
                  aria-label="Search"
                />
                <Button id="searchButton" size="sm" >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                    <path fill="none" d="M0 0 h24v24H0V0z"></path>
                    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48 -5.34 c -0.47 -2.78 -2.79 -5 -5.59 -5.34 a 6.505 6.505 0 0 0 -7.27 7.27 c 0.34 2.8 2.56 5.12 5.34 5.59 a 6.5 6.5 0 0 0 5.34 -1.48 l 0.27 0.28 v 0.79 l 4.25 4.25 c 0.41 0.41 1.08 0.41 1.49 0 c 0.41 -0.41 0.41 -1.08 0 -1.49 L 15.5 14 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z"></path>
                  </svg>
                </Button>
              </InputGroup>
              <Button>

              </Button>
              <Button>

              </Button>
              <Button>

              </Button>
              <NavDropdown
                title="EN"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item href="#action3">English(United States)</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Francais(Canada)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Francais(France)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Deutsch(Deutschland)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Espanol(Espana)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
