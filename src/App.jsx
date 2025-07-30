import { Link } from "react-scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="navigation">
        <Link to="section1" smooth={true} duration={500}>
          <span className="active"></span>
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          <span></span>
        </Link>
        <span></span>
        <span></span>
      </div>
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
