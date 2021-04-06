import React from "react";
import Card from "../Card";

const projects = [
  {
    id: 1,
    poster: "./imgs/DOGS!.gif",
    webmv: "./imgs/dogs.webm",
    mp4: "./imgs/dogs.mp4",
    name: "Adopt Don't Shop - Hosted on Heroku",
    githubLink: "https://github.com/Msas12/Project-2",
    deployedLink: "https://project2msksmh.herokuapp.com/",
  },
  {
    id: 2,
    poster: "./imgs/covid.gif",
    webmv: "./imgs/covid.webm",
    mp4: "./imgs/covid.mp4",
    name: "Project: COVID Is No Joke!",
    githubLink: "https://github.com/Msas12/COVID-Is-No-Joke-",
    deployedLink: "https://msas12.github.io/COVID-Is-No-Joke-/#!",
  },
  {
    id: 3,
    poster: "./imgs/weatherapp.gif",
    webmv: "./imgs/weatherapp.webm",
    mp4: "./img/weatherapp.mp4",
    name: "Weather App",
    githubLink: "https://github.com/Msas12/Weather-App",
    deployedLink: "https://msas12.github.io/Weather-App/",
  },
  {
    id: 4,
    poster: "./imgs/codingquiz.gif",
    webmv: "./imgs/codingquiz.webm",
    mp4: "./imgs/codingquiz.mp4",
    name: "Coding Quiz",
    githubLink: "https://github.com/Msas12/Coding-Quiz",
    deployedLink: "https://msas12.github.io/Coding-Quiz/",
  },
  {
    id: 5,
    poster: "./imgs/Burgers.gif",
    webmv: "./imgs/Burgers.webm",
    mp4: "./imgs/Burgers.mp4",
    name: "Burgers App - Hosted on Heroku",
    githubLink: "https://github.com/Msas12/Burger-App",
    deployedLink: "https://sleepy-coast-16684.herokuapp.com/",
  },
];

function Projects() {
  return (
    <div className="container">
      <div className="row row-cols-md-3 mx-auto mt-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            poster={project.poster}
            webmv={project.webmv}
            mp4={project.mp4}
            name={project.name}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
