import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
    <Navbar className="nav-container nav"  variant="dark">
      <Container>
        <Nav className="mr-auto">
            <Nav.Link as="span" href="/">
              <Link to="/landing">Ghoul Latte</Link>
            </Nav.Link>
            <Nav.Link as="span" href="/products">
              <Link to="/products">Products</Link>
            </Nav.Link>
            <Nav.Link as="span" href="/financing">
              <Link to="/financing">Financing</Link>
            </Nav.Link>
            <Nav.Link as="span" href="/cart">
              <Link to="/cart">Cart</Link>
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}
;