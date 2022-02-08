import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { CodingAboutPage } from "./pages/CodingAboutPage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  document.title = "john!";

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="ActivePage">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="coding" element={<CodingAboutPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
