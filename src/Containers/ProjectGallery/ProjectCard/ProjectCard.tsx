import React from "react";

import "./ProjectCard.css";
import { IProjectData } from "../ProjectGalleryHelper";
import { scrollTo } from "../../../helper.ts";

interface IProjectCardProps {
  data: IProjectData;
  selected: boolean;
  setSelectedProject: (IProjectData) => void;
}

const ProjectCard = ({
  data,
  selected,
  setSelectedProject,
}: IProjectCardProps) => {
  return (
    <div
      className={selected ? "ProjectCardSelected" : "ProjectCard"}
      onClick={() => {
        setSelectedProject(data);
        scrollTo("ProjectShowcase");
      }}
    >
      <div className="ProjectThumbnailContainer">
        <img src={data.thumbnail}></img>
      </div>
      <div className="ProjectInfoContainer">
        <h2>{data.title}</h2>
        <p>{data.shortDescription}</p>

        <div className="TechnologiesContainer">
          {data.technologies.map((tech) => {
            return <h4 className="TechnologyTag">{tech}</h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
