import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" fixed="top">
      <Container fluid >
        <Navbar.Brand href="/" className="ms-auto">
          <Image src="./images/logo1.png" alt="Logo" className="logo-image" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productandsolutions" className="nav-link">
              Product & Solutions
            </Nav.Link>
            <Nav.Link href="/industry" className="nav-link">Industry</Nav.Link>
            <Nav.Link href="/technology" className="nav-link">Technology</Nav.Link>
            <Nav.Link href="/resources" className="nav-link">Resources</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            <Nav.Link href="/career" className="nav-link">Career</Nav.Link>

            <NavDropdown title="Dropdown" className="custom-dropdown">
              <NavDropdown.Item href="/action1" className="dropdown-item">
                Action 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/action2" className="dropdown-item">
                Action 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action3" className="dropdown-item">
                Action 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
