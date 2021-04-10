import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainContainer">
      <Router>
        <div>
          <Navbar />
          <Route exact path="/portfolio/" component={Home} />
          <Route exact path="/portfolio/projects" component={Projects} />
          <Route exact path="/portfolio/contact" component={Contact} />
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
