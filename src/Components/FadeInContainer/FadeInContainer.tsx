import React, { useEffect, useRef, useState } from "react";
import "./FadeInContainer.css";

export interface IContainerProps {
  children: React.ReactNode;
}

const FadeInContainer = ({ children }: IContainerProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!isVisible && entry.isIntersecting) {
          setIsVisible(true); // observe whether the element is on screen
        }
      });
    });

    if (containerRef?.current != null) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef?.current != null) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`fade-in-container ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInContainer;
