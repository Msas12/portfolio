import React from "react";
import TabContainer from "react-bootstrap/TabContainer";
import Footer from "../Footer";
import { Nav, Row, Col, TabContent, TabPane } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="email">
      {/* Tabs */}
      <Row>
        <Col sm={3} className="mt-5">
          <Nav variant="tabs" className="flex-column">
            {/* Email Tab */}
            <Nav.Item className="nav-tabs">
              <Nav.Link className="contact-nav-link" eventKey="email">
                Email Me
              </Nav.Link>
            </Nav.Item>
            {/* Contact Info Tab */}
            <Nav.Item className="nav-tabs">
              <Nav.Link className="contact-nav-link" eventKey="contactInfo">
                Contact Info
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Tabs open up this content */}
        {/* Email Tab */}
        <Col sm={9}>
          <TabContent>
            <TabPane eventKey="email">
              <div className="col-md-9">
                <div className="card mb-3 mt-5 mx-auto">
                  <div className="card-body">
                    <form
                      id="emailForm"
                      action="https://getform.io/f/16037c53-149e-472f-a35f-cf96400cd962"
                      method="POST"
                    >
                      <div className="mb-3">
                        <label for="name" className="form-label">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Full Name"
                          name="name"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email address:
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          name="email"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Email Body:
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="message"
                        ></textarea>
                      </div>
                      <button
                        className="btn btn-sm send-email-button"
                        style={{ backgroundColor: "#48b6cd" }}
                        type="submit"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </TabPane>

            {/* My Info Tab */}
            <TabPane eventKey="contactInfo">
              <div className="col-md-9">
                <div className="card mb-3 mt-5 mx-auto">
                  {/* Body */}
                  <div className="card-body text-center">
                    <h4 className="card-title mb-4">Contact Info</h4>
                    <p>
                      Cell:{" "}
                      <a className="match-color" href="tel:+16186238782">
                        618-623-8782
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        className="match-color"
                        href="mailto:mdsasiela@gmail.com"
                      >
                        mdsasiela@gmail.com
                      </a>
                    </p>
                    <p className="card-text">
                      Download My Resume: &nbsp;
                      <a
                        href="./Michael Sasiela Resume.pdf"
                        download="Mike Sasiela Resume"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon className="fas" icon={faFilePdf} />
                      </a>
                    </p>
                  </div>
                  {/* Footer */}
                  <Footer />
                </div>
              </div>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
  );
}

export default Contact;
