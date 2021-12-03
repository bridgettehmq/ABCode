import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Navbar, Offcanvas, Container, Nav } from "react-bootstrap";

import "./Navbar.css";


export default function NavFunction() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand className="brand" href="/">ABCode</Navbar.Brand>
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
              <Nav.Link href="/info">info</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            {isLoggedIn ? (
              <>
                <button className="navbar-link" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Nav.Link href="/NewPage" > {isLoggedIn} My Pages</Nav.Link>
              </>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

    // <nav className="navbar">
    //   <NavLink exact to="/" className="navbar-link">
    //     Home
    //   </NavLink>
    //   <NavLink exact to="/info" className="navbar-link">
    //     Info
    //   </NavLink>
    //   {isLoggedIn ? (
    //     <>
    //       <NavLink to="/protected" className="navbar-link">
    //         User
    //       </NavLink>
    //       <button className="navbar-link" onClick={logout}>
    //         Logout
    //       </button>
    //     </>
    //   ) : (
    //     <>
    //       <NavLink to="/login" className="navbar-link">
    //         Login
    //       </NavLink>
    //       <NavLink to="/signup" className="navbar-link">
    //         Signup
    //       </NavLink>
    //     </>
    //   )}
    // </nav>
  );
}
