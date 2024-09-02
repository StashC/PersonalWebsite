import React, { useState } from "react";
import "./TopBar.css";
import { scrollTo } from "../../helper.ts";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <div className="TopBar">
      <div className="TopBarContentContainer">
        <h2 className="TopBarName">Stash Currie</h2>
        <div className={`TopBarLinkContainer ${isOpen ? "Open" : ""}`}>
          <Link className="TopBarLink" to="/#PersonalProfile">
            Home
          </Link>
          <Link className="TopBarLink" to="/#ResumeSection">
            Experience
          </Link>
          <Link className="TopBarLink" to="/#ProjectGalleryTitle">
            Projects
          </Link>
          <Link className="TopBarLink" to="/#ContactCard">
            Contact
          </Link>
          <Link className="TopBarLink" to="/blog">
            Blog
          </Link>
        </div>
        <div className="NavToggle" onClick={toggleOpen}>
          &#9776;
        </div>
      </div>
    </div>
  );
};

export default TopBar;
