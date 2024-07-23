import React, { useState } from "react";
import "./ProjectShowcase.css";
import { ILink, IProjectData } from "../ProjectGalleryHelper";
import MediaCarousel from "../../../Components/MediaCarousel/MediaCarousel.tsx";

interface IShowcaseProps {
  data: IProjectData;
}

const ProjectShowcase = ({ data }: IShowcaseProps) => {
  return (
    <div id="ProjectShowcase" className="ShowcaseContainer">
      <div className="CarouselContainer">
        <MediaCarousel mediaList={data.mediaList} />
      </div>
      <div className="ProjectShowcaseInfoContainer">
        <h1 className="ProjectTitle">{data.title}</h1>

        <p>{data.longDescription}</p>
        <div className="ShowcaseFooter">
          <div className="ShowcaseRowContainer">
            <h4>Technologies & Skills: </h4>
            {data.technologies.map((tech: string) => {
              return <div className="ShowcaseRowItem">{tech}</div>;
            })}
          </div>
          <div className="ShowcaseRowContainer">
            <h4>Links:</h4>
            {data.links.map((link: ILink) => {
              return (
                <a
                  className="ShowcaseRowItem"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.displayText}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
