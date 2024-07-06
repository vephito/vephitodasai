import "./App.css";
import '../src/styles/styles.css'
import Intro from "./components/Intro.js";
import About from "./components/Aboutme.js";
import Footer from "./components/Footer";
import Nav from "./components/Nav.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import ProgressBar from "./components/ProgressBar.js";

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <ProgressBar />
        <Nav />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
