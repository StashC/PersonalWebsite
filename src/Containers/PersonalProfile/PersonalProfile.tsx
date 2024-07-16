import React from "react";
import "./PersonalProfile.css";
import IconButton from "../../Components/IconButton.tsx";

const PersonalProfile = ({}) => {
  return (
    <div id="PersonalProfile" className="PersonalProfileContainer">
      <div className="LeftColumn">
        <div className="NameContainer">
          <h2 className="NameHeaderText">Hi, I'm Stash Currie</h2>
        </div>
        <h3>Software Developer</h3>
        <p>
          Aspiring Computer Science student studying at UBC. Interested in
          Software Development, AI and more! I love cooking, am always in the
          gym, and enjoy playing video games with friends. Feel free to connect
          with me on LinkedIn, or checkout my links below!
        </p>
        <a
          className="ResumeLink"
          aria-label="Download Resume"
          href="/StashResume2024S.pdf"
          download
        >
          {"> View Resume"}
        </a>
        <div className="SocialIconContainer">
          <IconButton network="github" url="https://github.com/StashC" />
          <IconButton
            network="linkedin"
            url="https://www.linkedin.com/in/stashcurrie/"
          />
          <IconButton
            network="youtube"
            url="https://www.youtube.com/@StashCurrie"
          />
          <IconButton network="email" url="mailto:stashubc@student.ubc.ca" />
        </div>
      </div>
      <div className="RightColumn">
        <div className="ImageContainer">
          <img src="https://i.imgur.com/v9kjIRb.png" />
        </div>
        <h3 className="LocationText"> 𖡡 Vancouver, Canada</h3>
      </div>
    </div>
  );
};

export default PersonalProfile;
