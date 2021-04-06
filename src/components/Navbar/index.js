import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function NavTabs() {
  const location = useLocation();

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/portfolio/">
        <img src="imgs/memoji.png" alt="memoji icon" width="50" height="50" />{" "}
        Mike Sasiela
      </Navbar.Brand>

      {/* Dark Mode Toggle */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/portfolio/"
            className={
              location.pathname === "/portfolio/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/portfolio/projects"
            className={
              location.pathname === "/portfolio/projects"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/portfolio/contact"
            className={
              location.pathname === "/portfolio/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contacts
          </Nav.Link>
          <Nav.Link
            href="./Michael Sasiela Resume 2021.pdf"
            download="Mike Sasiela Resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
