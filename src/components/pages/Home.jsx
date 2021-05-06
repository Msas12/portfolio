import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import CardFooter from "../CardFooter";

function Home() {
  return (
    <main>
      <div className="card-group">
        <div className="mb-3 mt-5 mx-auto" style={{ maxWidth: "90%" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                className="me-image"
                src="imgs/me5.jpeg"
                alt="Mike"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Mike Sasiela</h4>
                  <h5 className="card-text">Full Stack Developer</h5>

                  <p className="card-text">
                    I have had a love for the inner-workings of tech my whole
                    life, and after working in the Information and Technology
                    field for a few years I knew I had to take it to the next
                    level.
                  </p>
                  <p className="card-text">
                    I recently graduated and earned a Full Stack Developer
                    Certificate from Washington University in St. Louis McKelvey
                    School of Engineering.
                  </p>
                  <p className="card-text">
                    After completing this 24 week inensive course I now have
                    competencies in: HTML5, CSS3, JavaScript, jQuery,
                    Express.js, React.js, Node.js, Progressive Web Apps,
                    Database Theory, MongoDB, MySQL, Git, Python, Java, C#, PHP
                    and more.
                  </p>

                  <h4 className="card-text">
                    Download My Resume: &nbsp;
                    <a
                      href="./Michael Sasiela Resume.pdf"
                      download="Mike Sasiela Resume"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon className="fas" icon={faFilePdf} />
                    </a>
                  </h4>
                </div>

                <CardFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
