import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav,} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'



function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
const location = useLocation();

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/"><img src="imgs/memoji.png" alt="memoji icon" width="50" height="50"/> Mike Sasiela</Navbar.Brand>

      {/* Dark Mode Toggle */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
          <Nav.Link as={Link} to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contacts</Nav.Link>
          <Nav.Link href="./Michael Sasiela Resume 2021.pdf">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
