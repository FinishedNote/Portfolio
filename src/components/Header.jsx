import { Menu } from "lucide-react";
import github from "../assets/GithubIcon.png";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <Menu />
      </div>
      <nav className="navbar">
        <ul>
          <li>Accueil</li>
          <li>Compétences</li>
          <li>Projets</li>
        </ul>
      </nav>
      <div className="contactButtons">
        <li>Contact</li>
        <a href="https://github.com/FinishedNote" target="_blank">
          <img src={github} alt="Github icon" /> Github
        </a>
      </div>
    </header>
  );
};

export default Header;
