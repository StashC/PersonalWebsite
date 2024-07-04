import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard.tsx";

import "./ProjectGallery.css";
import "../../App.css";

const ProjectGallery = ({}) => {
  return (
    <div className="ProjectGallery">
      <h2 className="MainSectionHeader"> Projects</h2>

      <div className="ProjectCardContainer">
        <ProjectCard
          title={"ItinerAI"}
          technologies={["Azure", "Machine Learning", "Python"]}
          description={
            "A cool machine learning project using LangChain.  Created with Friends"
          }
          thumbnail={
            "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg"
          }
        />
        <ProjectCard
          title={"ItinerAI"}
          technologies={["Azure", "Machine Learning", "Python"]}
          description={
            "A cool machine learning project using LangChain.  Created with Friends"
          }
          thumbnail={
            "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg"
          }
        />
        <ProjectCard
          title={"ItinerAI"}
          technologies={["Azure", "Machine Learning", "Python"]}
          description={
            "A cool machine learning project using LangChain.  Created with Friends"
          }
          thumbnail={
            "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg"
          }
        />
      </div>
    </div>
  );
};

export default ProjectGallery;
