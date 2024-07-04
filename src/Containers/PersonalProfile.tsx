import React from "react";
import "./PersonalProfile.css";

const PersonalProfile = ({}) => {
  return (
    <div className="PersonalProfileContainer">
      <div className="LeftColumn">
        <div className="NameContainer">
          <h2 className="NameHeaderText">Hi, I'm Stash Currie</h2>
        </div>
        <h3>Software Developer</h3>
        <p>
          Aspiring Computer Science student @ UBC. Interested in Software
          Development, AI and more! Feel free to connect with me on LinkedIn!
          lorem ipsum dolor est tu em ist waloer lorem ipsum dolor est tu em ist
          waloer lorem ipsum dolor est tu em ist waloer lorem ipsum dolor est tu
          em ist waloer
        </p>
      </div>
      <div className="RightColumn">
        <div className="ImageContainer">
          <img src="https://i.imgur.com/v9kjIRb.png" />
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
