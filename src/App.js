import Projects from "./components/Projects/projects";
import ContactMe from "./components/ContactMe/contactMe";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer /> */}
    </div>
  );
}

export default App;
