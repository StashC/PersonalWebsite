import React from "react";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <div id="ContactCard" className="ContactCardContainer">
      <h2>Contact Me</h2>
      <div className="ContactRow">
        <h3>Email:</h3>
        <p>stashubc@student.ubc.ca</p>
      </div>
      <div className="ContactRow">
        <h3>LinkedIn:</h3>
        <a href="https://www.linkedin.com/in/stashcurrie/">/in/stashcurrie</a>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ContactCard;
