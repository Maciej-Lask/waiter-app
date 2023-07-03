
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="rounded my-3">
      <Container>
        <Navbar.Brand href="/">waiter.app</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/"  activeclassname="active">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
