import React, { useState } from "react";
import { IJob } from "./JobHelper";
import Chip from "../../Components/Chip/Chip.tsx";
import "./JobCard.css";
import { FaMinus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

interface IJobCardProps {
  job: IJob;
}

const JobCard = ({ job }: IJobCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    setIsExpanded((expanded) => !expanded);
  };

  return (
    <div className="JobCardContainer">
      <div className="JobCardHeader">
        <div className="JobMainInfoContainer">
          <h2>{job.jobTitle}</h2>
          <h3>{job.company}</h3>
        </div>
        <div className="JobSecondaryInfoContainer">
          <h4>{`${job.startDate} - ${job.endDate}`}</h4>
          <button
            className="CollapseButton"
            onClick={() => {
              toggleExpanded();
            }}
          >
            {isExpanded ? <FaMinus /> : <FaChevronDown />}
          </button>
        </div>
      </div>
      <div
        className={`JobCardContent ${isExpanded ? "Expanded" : "Collapsed"}`}
      >
        <ul>
          {job.description.map((item, index) => {
            return (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            );
          })}
        </ul>
        <div className="ResumeSkillsContainer">
          {job.skills.map((skill) => {
            return <Chip text={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
