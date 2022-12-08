import React from "react";
import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navBar-bg" expand="lg">
        <Container className="">
          <Navbar.Brand className="" href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto ">
              <Nav.Link className="" href="/Posts">Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
