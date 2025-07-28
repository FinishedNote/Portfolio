import Scene from "./Scene";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    // Attendre que les polices soient chargées
    document.fonts.ready.then(() => {
      const heroSplit = new SplitText(".main-title", {
        type: "chars, words",
      });

      const paragraphSplit = new SplitText(".subtitle", {
        type: "lines",
      });

      gsap.from(heroSplit.chars, {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.06,
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 0.3,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });
    });
  });

  return (
    <div className="hero-section">
      <div className="about-part">
        <h1 className="title main-title">Miroir Raphaël</h1>
        <p className="subtitle">
          Développeur web spécialisé React. J’allie performance, esthétique et
          interactivité dans des projets modernes et soignés.
        </p>
        <button type="button" className="cta-btn">
          Découvrir
        </button>
      </div>
      <div className="model-part">
        <Scene />
      </div>
    </div>
  );
};

export default Hero;
