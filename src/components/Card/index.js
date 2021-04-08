import React from "react";

const Card = (props) => (
  <div class="col mb-5">
    <div className="card h-100">
      <video
        className="card-img-top"
        poster={props.poster}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={props.webmv} type="video/webm" />
        <source src={props.mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-title">
        <h5 className="text-center mt-4">{props.name}</h5>
      </div>
      <div className="card-footer text-center">
        <a
          href={props.githubLink}
          type="button"
          className="btn btn-sm mb-1 m-1"
          style={{ backgroundColor: "#48b6cd" }}
        >
          <i className="fab fa-github-square fa-lg"></i>&nbsp;Github repo
        </a>
        <a
          href={props.deployedLink}
          type="button"
          className="btn btn-sm mb-1 m-1"
          style={{ backgroundColor: "#48b6cd" }}
        >
          Web App Link
        </a>
      </div>
    </div>
  </div>
);

export default Card;
