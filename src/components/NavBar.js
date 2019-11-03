import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="top-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        // // variant="dark"
        sticky="top"
        className="mainNav"
      >
        <a href="#home" className="navbar-brand">
          Home
        </a>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
