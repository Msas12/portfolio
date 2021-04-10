import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function NavTabs() {
  const location = useLocation();
  const [menuButton, setMenuButton] = useState({
    icon: faBars,
  });

  const handleClick = () => {
    if (menuButton.icon === faBars) {
      return setMenuButton({ icon: faTimes });
    } else {
      return setMenuButton({ icon: faBars });
    }
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/portfolio/">
        <img src="imgs/memoji.png" alt="memoji icon" width="50" height="50" />{" "}
        Mike Sasiela
      </Navbar.Brand>

      {/* Dark Mode Toggle */}

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ border: "none" }}
        onClick={() => handleClick()}
      >
        <span>
          <FontAwesomeIcon
            className="fa"
            icon={menuButton.icon}
            size="2x"
            color="#ece3d4"
          />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/portfolio/"
            className={
              location.pathname === "/portfolio/"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/portfolio/projects"
            className={
              location.pathname === "/portfolio/projects"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/portfolio/contact"
            className={
              location.pathname === "/portfolio/contact"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="./Michael Sasiela Resume.pdf"
            className={
              location.pathname === "/portfolio/resume"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
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
