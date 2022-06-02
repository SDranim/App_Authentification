import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
