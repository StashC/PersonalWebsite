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
          return (
            <div className="JobContainer">
              <div className="JobDecorationContainer">
                <div className="JobCircleContainer Top">
                  <h4>{job.endDate}</h4>
                  <span className="JobCircle" />
                </div>
                <span className="JobVerticalLine" />
                <div className="JobCircleContainer Bottom">
                  <h4>{job.startDate}</h4>
                  <span className="JobCircle" />
                </div>
              </div>
              <JobCard job={job} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeSection;
