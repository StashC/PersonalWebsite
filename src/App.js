import "./App.css";
import TopBar from "./Components/TopBar/TopBar.tsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.tsx";
import ProjectGallery from "./Containers/ProjectGallery/ProjectGallery.tsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <PersonalProfile />
      <ProjectGallery />
    </div>
  );
}

export default App;
