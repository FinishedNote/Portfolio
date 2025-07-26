import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="navigation">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
