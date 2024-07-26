import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/email";
import "react-social-icons/youtube";
import { secondaryColor, textColor } from "../helper.ts";

interface IIconProps {
  network: string;
  url: string;
}

const IconButton = ({ network, url }: IIconProps) => {
  return (
    <div style={{ marginRight: "15px" }}>
      <SocialIcon
        style={{
          height: "5rem",
          width: "5rem",
          maxHeight: "10vw",
          maxWidth: "10vw",
        }}
        network={network}
        url={url}
        fgColor={textColor}
        bgColor={secondaryColor}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default IconButton;
