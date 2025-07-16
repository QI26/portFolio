import { useState } from "react";
import "./App.css";
import {Header} from "./components/Header";
import {AboutMeSection} from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <html class ="scroll-smooth">
      <div>
        <Header/>
        <AboutMeSection />
        <ProjectsSection />
        <Footer />
      </div>
    </html>
  );
}

export default App;
