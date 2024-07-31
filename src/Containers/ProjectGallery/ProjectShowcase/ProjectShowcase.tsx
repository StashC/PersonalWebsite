import React, { useState } from "react";
import "./ProjectShowcase.css";
import { ILink, IProjectData } from "../ProjectGalleryHelper";
import MediaCarousel from "../../../Components/MediaCarousel/MediaCarousel.tsx";
import Chip from "../../../Components/Chip/Chip.tsx";

interface IShowcaseProps {
  data: IProjectData;
}

const ProjectShowcase = ({ data }: IShowcaseProps) => {
  return (
    <div id="ProjectShowcase" className="ShowcaseContainer">
      <MediaCarousel mediaList={data.mediaList} />
      <div className="ProjectShowcaseInfoContainer">
        <h1 className="ProjectTitle">{data.title}</h1>

        <p>{data.longDescription}</p>
        <div className="ShowcaseFooter">
          <div className="ShowcaseRowContainer">
            <h3 style={{ marginRight: "0.75rem" }}>Technologies and Skills:</h3>
            {data.technologies.map((tech: string) => {
              return <Chip text={tech} />;
            })}
          </div>
          <div className="ShowcaseRowContainer">
            <h3 style={{ marginRight: "0.75rem" }}>Links:</h3>
            {data.links.map((link: ILink) => {
              return (
                <Chip
                  text={link.displayText}
                  link={link.url}
                  icon={link.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
