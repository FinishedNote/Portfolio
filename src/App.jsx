import Header from "./components/Header";
import Scene from "./components/Scene";

const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="hero-section">
        <div className="about-part">
          <h1>Miroir Raphaël</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            massa lectus, congue vel aliquam non, tempus id mauris.
          </p>
          <button type="button">Discover</button>
        </div>
        <div className="model-part">
          <Scene />
        </div>
      </div>
    </div>
  );
};

export default App;
