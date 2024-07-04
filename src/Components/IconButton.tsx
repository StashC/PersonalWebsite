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
        style={{ height: "4vw", width: "4vw" }}
        network={network}
        url={url}
        fgColor={textColor}
        bgColor={secondaryColor}
      />
    </div>
  );
};

export default IconButton;
