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
                  aria-label="Search"Hindi
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
              <Button id="IMBdPro">
                <div>
                  <svg id="svgTotal">
                    <g fill="currentColor">
                    <rect x="0" y="1" width="3.21" height="12.34"></rect>
                    <path d="M 10 1 L 9.3 6.76 L 8.84 3.63 C 8.7 2.62 8.58 1.75 8.45 1 L 4.3 1 L 4.3 13.34 L 7.11 13.34 L 7.11 5.19 L 8.3 13.34 L 10.3 13.34 L 11.42 5 L 11.42 13.33 L 14.22 13.33 L 14.22 1 L 10 1 Z"></path>
                    <path d="M 19.24 3.22 C 19.3711 3.29185 19.4602 3.4218 19.48 3.57 C 19.5341 3.92393 19.5542 4.28224 19.54 4.64 L 19.54 9.42 C 19.5789 9.92887 19.5246 10.4406 19.38 10.93 C 19.27 11.12 18.99 11.21 18.53 11.21 L 18.53 3.11 C 18.7719 3.09407 19.0143 3.13163 19.24 3.22 Z M 19.24 13.34 C 19.8163 13.3574 20.3929 13.3138 20.96 13.21 C 21.3245 13.1481 21.6681 12.997 21.96 12.77 C 22.2288 12.5438 22.421 12.2399 22.51 11.9 C 22.6433 11.1679 22.6969 10.4236 22.67 9.68 L 22.67 5.34 C 22.6662 4.55669 22.606 3.77467 22.49 3 C 22.4304 2.59841 22.2608 2.22116 22 1.91 C 21.6636 1.56094 21.2327 1.31765 20.76 1.21 C 19.7709 1.02849 18.7647 0.958051 17.76 1 L 15.32 1 L 15.32 13.34 L 19.24 13.34 Z"></path>
                    <path d="M 27.86 10.34 C 27.877 10.7218 27.8501 11.1043 27.78 11.48 C 27.72 11.63 27.46 11.71 27.26 11.71 C 27.0955 11.7299 26.9386 11.635 26.88 11.48 C 26.793 11.1542 26.7593 10.8165 26.78 10.48 L 26.78 7.18 C 26.7626 6.84409 26.7929 6.50741 26.87 6.18 C 26.9318 6.03447 27.0834 5.94841 27.24 5.97 C 27.43 5.97 27.7 6.05 27.76 6.21 C 27.8468 6.5358 27.8806 6.87346 27.86 7.21 L 27.86 10.34 Z M 23.7 1 L 23.7 13.34 L 26.58 13.34 L 26.78 12.55 C 27.0112 12.8468 27.3048 13.0891 27.64 13.26 C 28.0022 13.4198 28.3941 13.5016 28.79 13.5 C 29.2589 13.5153 29.7196 13.3746 30.1 13.1 C 30.4399 12.88 30.6914 12.5471 30.81 12.16 C 30.9424 11.6168 31.0062 11.0591 31 10.5 L 31 7 C 31.0088 6.51279 30.9921 6.02547 30.95 5.54 C 30.9045 5.28997 30.8018 5.05383 30.65 4.85 C 30.4743 4.59691 30.2271 4.40195 29.94 4.29 C 29.5869 4.15031 29.2096 4.08233 28.83 4.09 C 28.4362 4.08962 28.0459 4.16428 27.68 4.31 C 27.3514 4.46912 27.0587 4.69371 26.82 4.97 L 26.82 1 L 23.7 1 Z"></path>
                    </g>

                  </svg>
                </div>
              </Button>
              <Button id="watchList">

              </Button>
              <Button id="signIn">

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
