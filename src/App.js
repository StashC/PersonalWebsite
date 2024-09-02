import "./App.css";
import MainPage from "./Pages/MainPage.tsx";
import BlogPage from "./Pages/Blog/BlogPage.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
