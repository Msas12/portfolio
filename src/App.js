import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/portfolio/home" component={Home} />
        <Route exact path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
