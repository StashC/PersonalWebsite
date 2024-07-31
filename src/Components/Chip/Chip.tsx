import React from "react";
import "./Chip.css";
import { SocialIcon } from "react-social-icons/component";
import { primaryColor, secondaryColor } from "../../helper.ts";
import IconReact from "../../Icons/ReactIcon.tsx";

export enum Icon {
  "WEBSITE" = 1,
  "github" = 2,
  "discord" = 3,
  "chrome" = 4,
  "reddit" = 5,
  "instagram" = 6,
  "youtube" = 7,
  "email" = 8,
  "linkedin" = 9,
}

interface IChipProps {
  text: string;
  link?: string;
  icon?: Icon;
}

const Chip = ({ text, link, icon }: IChipProps) => {
  return (
    <div
      className={`Chip ${link != null ? "Clickable" : ""}`}
      onClick={() => {
        if (link != null) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }}
    >
      {icon &&
        (icon == Icon.WEBSITE ? (
          <IconReact size="40px" fgColor="#FFFFFF" bgColor={secondaryColor} />
        ) : (
          <SocialIcon
            style={{
              height: "40px",
              width: "40px",
              marginRight: "-5px",
            }}
            network="github"
            url={link}
            fgColor={"white"}
            bgColor={secondaryColor}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}

      <div className="ChipText">{text}</div>
    </div>
  );
};

export default Chip;
