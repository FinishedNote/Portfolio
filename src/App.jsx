import { Link } from "react-scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Skills />
      <Projects />
        <Link to="header" smooth={true} duration={500} className="up">
          <span>↑</span>
        </Link>
    </div>
  );
};

export default App;
