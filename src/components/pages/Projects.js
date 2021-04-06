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
];

function Projects() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto mt-5">
      <div>
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
