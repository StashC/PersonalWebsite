import React from "react";

import "./ResumeSection.css";

import { JobData } from "./JobHelper.ts";
import JobCard from "./JobCard.tsx";
const ResumeSection = () => {
  return (
    <div id="ResumeSection" className="ResumeSection">
      <h2 className="MainSectionHeader">Experience</h2>
      <div className="ResumeJobsContainer">
        {JobData.map((job) => {
          return <JobCard job={job} />;
        })}
      </div>
    </div>
  );
};

export default ResumeSection;
