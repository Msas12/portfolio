import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


function Home() {
  return (
<main>
        <div className="card-group">
            <div className="mb-3 mt-5 mx-auto" style={{maxWidth: '90%'}}>
                <div className="row">
                    <div className="col-md-4">
                        <img className="me-image" src="imgs/me5.jpeg" alt="Mike" style= {{width: "100%"}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Mike Sasiela</h4>
                                <h5 className="card-text">Full Stack Developer</h5>

                                <p className="card-text">I have had a love for the inner-workings of tech my whole life, and
                                    after working in the Information and Technology field for a few years I knew I had
                                    to take it to the next level.</p>
                                <p className="card-text">I am currently enrolled in a Coding Bootcamp at Washington University in St. Louis -
                                    McKelvey School of Engineering.</p>
                                <p className="card-text">Upon graduation of this 24 week intensive Bootcamp, I will earn a Certificate of
                                    completion with competencies in: HTML5, CSS3, JavaScript, jQuery, Express.js,
                                    React.js, Node.js, Progressive Web Apps, Database Theory, MongoDB, MySQL, Git,
                                    Python, Java, C#, PHP and more.</p>
      
                                <h4 className="card-text">Download My Resume: &nbsp;<a
                                        href="./Michael Sasiela Resume 2021.pdf" download="Mike Sasiela Resume"
                                        target="_blank" rel="noreferrer"><FontAwesomeIcon className="fas" icon={faFilePdf}/></a></h4>
                            </div>

                            <div className="container footer text-center">
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-sasiela-04121992/"><FontAwesomeIcon className="p-1 fab fa-4x" icon={faLinkedin} /></a>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/Msas12"><FontAwesomeIcon className="p-1 fab fa-4x" icon={faGithubSquare} /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/msasiela/"><FontAwesomeIcon className="p-1 fab fa-4x" icon={faInstagramSquare} /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mike.sasiela"><FontAwesomeIcon className="p-1 fab fa-4x" icon={faFacebookSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Home;
