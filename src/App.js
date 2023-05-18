import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <main id="content">
      <Navbar id="navbar" />
      <Landing id="landing" />
      <About id="about" />
      <Projects id="projects" />
      <Footer />
    </main>
  );
}

export default App;
