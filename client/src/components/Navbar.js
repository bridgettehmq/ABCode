import { useAuth } from "../util/auth";
import { Navbar, Offcanvas, Container, Nav, Button } from "react-bootstrap";

import "./Navbar.css";

export default function NavFunction() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand className="brand" href="/">
          ABCode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/info">Flashcards</Nav.Link>
            {isLoggedIn && (
              <>
                <Nav.Link href="/NewPage"> New Page</Nav.Link>
                <Nav.Link href="/#"> My Pages</Nav.Link>
                <Nav.Link
                  className="navbar-link"
                  variant="light"
                  onClick={logout}
                  >
                  Logout
                </Nav.Link>
              </>
            )}
            {!isLoggedIn && (
              <>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
