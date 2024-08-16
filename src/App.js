import "./App.css";
import ContactCard from "./Components/ContactCard/ContactCard.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.tsx";
import ProjectGallery from "./Containers/ProjectGallery/ProjectGallery.tsx";
import ResumeSection from "./Containers/ResumeSection/ResumeSection.tsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <PersonalProfile id="PersonalProfile" />
      <ResumeSection />
      <ProjectGallery />
      <ContactCard />
      <a
        style={{ color: "white" }}
        target="_blank"
        href="https://youtu.be/-Bp7MYJVBXU"
        referrerPolicy="noopener,noreferer"
      >
        Made from scratch with React and TypeScript
      </a>
    </div>
  );
}

export default App;
