import React, { useEffect } from "react";
import ContactCard from "../Components/ContactCard/ContactCard.tsx";
import PersonalProfile from "../Containers/PersonalProfile/PersonalProfile.tsx";
import ProjectGallery from "../Containers/ProjectGallery/ProjectGallery.tsx";
import ResumeSection from "../Containers/ResumeSection/ResumeSection.tsx";
import { scrollTo } from "../helper.ts";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    scrollTo(location.hash);
  }, [location]);
  return (
    <>
      <PersonalProfile />
      <ResumeSection />
      <ProjectGallery />
      <ContactCard />
      <a
        style={{ color: "white" }}
        target="_blank"
        href="https://youtu.be/-Bp7MYJVBXU"
      >
        Made from scratch with React and TypeScript
      </a>
    </>
  );
};

export default MainPage;
