import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/" className="ms-auto">
          <Image src="./images/logo1.png" alt="Logo" className="logo-image" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productandsolutions" className="nav-link">
              Product & Solutions
            </Nav.Link>
            <NavDropdown title="Industry" className="custom-dropdown">
              <NavDropdown.Item href="/bfsi" className="dropdown-item">
                BFSI
              </NavDropdown.Item>
              <NavDropdown.Item href="/energy" className="dropdown-item">
                Energy
              </NavDropdown.Item>
              <NavDropdown.Item href="/manufacturing" className="dropdown-item">
                Manufacturing
              </NavDropdown.Item>
              <NavDropdown.Item href="/retail" className="dropdown-item">
                Retail
              </NavDropdown.Item>
              <NavDropdown.Item href="/healthcare" className="dropdown-item">
                Health Care
              </NavDropdown.Item>
              <NavDropdown.Item href="/automotive" className="dropdown-item">
                Automotive
              </NavDropdown.Item>
              <NavDropdown.Item href="/telecommunications" className="dropdown-item">
                Telecommunications
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/technology" className="nav-link">Technology</Nav.Link>
            <Nav.Link href="/resources" className="nav-link">Resources</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            <Nav.Link href="https://onelogica.com/careers.html" className="nav-link">Career</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
