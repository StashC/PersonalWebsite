import "./App.css";
import ContactCard from "./Components/ContactCard/ContactCard.tsx";
import FadeInContainer from "./Components/FadeInContainer/FadeInContainer.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.tsx";
import ProjectGallery from "./Containers/ProjectGallery/ProjectGallery.tsx";
import ResumeSection from "./Containers/ResumeSection/ResumeSection.tsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <PersonalProfile id="PersonalProfile" />
      <FadeInContainer>
        <ResumeSection />
      </FadeInContainer>
      <FadeInContainer>
        <ProjectGallery />
      </FadeInContainer>
      <FadeInContainer>
        <ContactCard />
      </FadeInContainer>
      <FadeInContainer>
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://youtu.be/-Bp7MYJVBXU"
          referrerPolicy="noopener,noreferer"
        >
          Made from scratch with React and TypeScript
        </a>
      </FadeInContainer>
    </div>
  );
}

export default App;
