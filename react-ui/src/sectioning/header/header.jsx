import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import logo from '../logo.svg'

import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
    <Navbar className="nav-container nav">
      <Container>
        <Nav className="mr-auto">
            <Nav.Link as="span" href="/landing">
              <Link to="/">Ghoul Latte</Link>
            </Nav.Link>
            <Nav.Link as="span" href="/products">
              <Link to="/products">Products</Link>
            </Nav.Link>
            <Nav.Link as="span" href="/about">
              <Link to="/about">About</Link>
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