import "./App.css";
import ContactCard from "./Components/ContactCard/ContactCard.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.tsx";
import ProjectGallery from "./Containers/ProjectGallery/ProjectGallery.tsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <PersonalProfile id="PersonalProfile" />
      <ProjectGallery />
      <ContactCard />
      <div>Made from scratch with React and TypeScript</div>
    </div>
  );
}

export default App;
