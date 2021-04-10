import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="mainFooter text-center">
    <div className="row">
      <div className="col-sm mt-2">
        <p style={{ color: "#454951" }}>Created By: Mike Saseiela</p>
      </div>

      <div className="col-sm">
        <a href="mailto:mdsasiela@gmail.com">
          <FontAwesomeIcon className="p-1 fab fa-3x" icon={faEnvelopeSquare} />
        </a>
        <a href="tel:+16186238782">
          <FontAwesomeIcon className="p-1 fab fa-3x" icon={faPhoneSquareAlt} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/michael-sasiela-04121992/"
        >
          <FontAwesomeIcon className="p-1 fab fa-3x" icon={faLinkedin} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Msas12">
          <FontAwesomeIcon className="p-1 fab fa-3x" icon={faGithubSquare} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/msasiela/"
        >
          <FontAwesomeIcon className="p-1 fab fa-3x" icon={faInstagramSquare} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/mike.sasiela"
        >
          <FontAwesomeIcon className="p-1 fab fa-3x" icon={faFacebookSquare} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
