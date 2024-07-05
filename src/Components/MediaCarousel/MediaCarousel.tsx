import React, { useEffect, useState } from "react";
import "./MediaCarousel.css";

export interface IMedia {
  type: "VIDEO" | "IMAGE";
  url: string;
  caption?: string;
}

export interface IMediaCarouselProps {
  mediaList: IMedia[];
}

const MediaCarousel = ({ mediaList }: IMediaCarouselProps) => {
  const [mediaIndex, setMediaIndex] = useState<number>(0);

  const handleLeftButton = () => {
    console.log("click left");

    if (mediaIndex !== 0) {
      setMediaIndex(mediaIndex - 1);
    } else {
      setMediaIndex(mediaList.length - 1);
    }
  };

  const handleRightButton = () => {
    console.log("click right");
    if (mediaIndex < mediaList.length - 1) {
      setMediaIndex(mediaIndex + 1);
    } else {
      setMediaIndex(0);
    }
  };

  return (
    <div className="MediaCarousel">
      <div className="MediaContainer">
        <div className="MediaButton" onClick={() => handleLeftButton()}>
          {"<"}
        </div>
        {mediaList[mediaIndex].type === "VIDEO" ? (
          <iframe
            title="video"
            className="VideoPlayer"
            src={mediaList[mediaIndex].url}
          />
        ) : (
          <img
            alt="Picture of project"
            className="ImageViewer"
            src={mediaList[mediaIndex].url}
          />
        )}
        <div className="MediaButton" onClick={() => handleRightButton()}>
          {">"}
        </div>
      </div>
      <p>{mediaList[mediaIndex].caption ?? ""}</p>
    </div>
  );
};

export default MediaCarousel;
