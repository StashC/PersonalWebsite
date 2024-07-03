import React from "react";
import "./TopBar.css";

const TopBar = ({}) => {
  return (
    <div className="TopBar">
      <h2 className="TopBarName">Stash Currie</h2>
      <div className="TopBarLinkContainer">
        <a className="TopBarLink">Home</a>
        <a className="TopBarLink">About</a>
        <a className="TopBarLink">Projects</a>
        <a className="TopBarLink">Contact</a>
      </div>
    </div>
  );
};

export default TopBar;
