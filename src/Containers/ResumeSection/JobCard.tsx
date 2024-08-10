import React from "react";
import { IJob } from "./JobHelper";
import Chip from "../../Components/Chip/Chip.tsx";
import "./JobCard.css";

interface IJobCardProps {
  job: IJob;
}

const JobCard = ({ job }: IJobCardProps) => {
  return (
    <div className="JobCardContainer">
      <div className="JobCardHeader">
        <h2>{job.company}</h2>
        <h4>{`${job.startDate} - ${job.endDate}`}</h4>
      </div>
      <h3>{job.jobTitle}</h3>
      <ul>
        {job.description.map((item, index) => {
          return <li key={index} dangerouslySetInnerHTML={{ __html: item }} />;
        })}
      </ul>
      <div className="ResumeSkillsContainer">
        {job.skills.map((skill) => {
          return <Chip text={skill} />;
        })}
      </div>
    </div>
  );
};

export default JobCard;
