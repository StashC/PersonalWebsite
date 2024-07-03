import "./App.css";
import TopBar from "./Components/TopBar/TopBar.tsx";
import PersonalProfile from "./Containers/PersonalProfile.tsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <PersonalProfile />
      <header className="App-header">hi</header>
    </div>
  );
}

export default App;
