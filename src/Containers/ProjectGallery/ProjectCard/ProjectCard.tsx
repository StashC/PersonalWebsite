import React from "react";

import "./ProjectCard.css";

interface IProjectCardProps {
  title: string;
  technologies: string[];
  description: string;
  thumbnail: string;
}

const ProjectCard = ({ title, technologies, description, thumbnail }) => {
  return (
    <div className="ProjectCard">
      <div className="ProjectThumbnailContainer">
        <img src={thumbnail}></img>
      </div>
      <div className="ProjectInfoContainer">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="TechnologiesContainer">
          {technologies.map((tech) => {
            return <h4 className="TechnologyTag">{tech}</h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
