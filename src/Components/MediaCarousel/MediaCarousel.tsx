import React, { useEffect, useState } from "react";
import "./MediaCarousel.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

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
  const [currentMedia, setCurrentMedia] = useState<IMedia>(mediaList[0]);

  useEffect(() => {
    setMediaIndex(0);
    setCurrentMedia(mediaList[0]);
  }, [mediaList]);

  useEffect(() => {
    setCurrentMedia(mediaList[mediaIndex]);
  }, [mediaIndex]);

  const handleLeftButton = () => {
    if (mediaIndex !== 0) {
      setMediaIndex(mediaIndex - 1);
    } else {
      setMediaIndex(mediaList.length - 1);
    }
  };

  const handleRightButton = () => {
    if (mediaIndex < mediaList.length - 1) {
      setMediaIndex(mediaIndex + 1);
    } else {
      setMediaIndex(0);
    }
  };

  return (
    <div className="MediaCarousel">
      <div className="MediaContainer">
        <button className="MediaButton" onClick={() => handleLeftButton()}>
          <FaChevronLeft />
        </button>
        {currentMedia && currentMedia.type === "VIDEO" ? (
          <iframe
            title="video"
            className="VideoPlayer"
            src={currentMedia.url}
            allowFullScreen={true}
          />
        ) : (
          <img
            alt="Picture of project"
            className="ImageViewer"
            src={currentMedia.url}
          />
        )}
        <button className="MediaButton" onClick={() => handleRightButton()}>
          <FaChevronRight />
        </button>
      </div>
      <p>{currentMedia.caption ?? ""}</p>
    </div>
  );
};

export default MediaCarousel;
