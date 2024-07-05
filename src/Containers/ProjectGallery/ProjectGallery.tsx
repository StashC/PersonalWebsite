import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard.tsx";

import "./ProjectGallery.css";
import "../../App.css";
import { IProjectData, ProjectData } from "./ProjectGalleryHelper.ts";
import ProjectShowcase from "./ProjectShowcase/ProjectShowcase.tsx";

const ProjectGallery = ({}) => {
  const [selectedProject, setSelectedProject] = useState<IProjectData>(
    ProjectData[0]
  );

  return (
    <div id="ProjectGallery" className="ProjectGallery">
      <h2 className="MainSectionHeader"> Projects</h2>

      <div className="ProjectCardContainer">
        {ProjectData.map((data) => {
          return (
            <ProjectCard
              data={data}
              selected={selectedProject.id == data.id}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </div>
      {selectedProject && <ProjectShowcase data={selectedProject} />}
    </div>
  );
};

export default ProjectGallery;
