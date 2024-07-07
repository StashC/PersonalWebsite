import React from "react";
import "./TopBar.css";
import { scrollTo } from "../../helper.ts";

const TopBar = () => {
  return (
    <div className="TopBar">
      <h2 className="TopBarName">Stash Currie</h2>
      <div className="TopBarLinkContainer">
        <div className="TopBarLink" onClick={() => scrollTo("PersonalProfile")}>
          Home
        </div>
        <a className="TopBarLink" onClick={() => scrollTo("PersonalProfile")}>
          About
        </a>
        <a className="TopBarLink" onClick={() => scrollTo("ProjectGallery")}>
          Projects
        </a>
        <a
          aria-label="Email"
          className="TopBarLink"
          onClick={() => scrollTo("ContactCard")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default TopBar;
