import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


function Paragraphe() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">HELLO</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">HOW ARE YOU</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Paragraphe;
