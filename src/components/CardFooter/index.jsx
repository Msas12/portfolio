import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const CardFooter = () => (
  <div className="container footer w-100 text-center">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/michael-sasiela-04121992/"
    >
      <FontAwesomeIcon className="p-1 fab fa-4x" icon={faLinkedin} />
    </a>
    <a target="_blank" rel="noreferrer" href="https://github.com/Msas12">
      <FontAwesomeIcon className="p-1 fab fa-4x" icon={faGithubSquare} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.instagram.com/msasiela/"
    >
      <FontAwesomeIcon className="p-1 fab fa-4x" icon={faInstagramSquare} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.facebook.com/mike.sasiela"
    >
      <FontAwesomeIcon className="p-1 fab fa-4x" icon={faFacebookSquare} />
    </a>
  </div>
);

export default CardFooter;
