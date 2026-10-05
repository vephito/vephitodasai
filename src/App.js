import "./App.css";
import "../src/styles/styles.css";
import Nav from "./components/Nav.js";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import About from "./components/Aboutme.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar.js";

function App() {
  return (
    <div className="App">
      {/* Background ambient lighting */}
      <div className="ambient-glow-1" aria-hidden="true"></div>
      <div className="ambient-glow-2" aria-hidden="true"></div>
      <div className="ambient-glow-3" aria-hidden="true"></div>

      <div className="app-content">
        <ProgressBar />
        <Nav />
        <Intro />
        <Experience />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
