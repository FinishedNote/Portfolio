import { Menu } from "lucide-react";
import github from "../assets/GithubIcon.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header name="header">
      <div className="menu">
        <Menu />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Mes compétences
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Mes projets
            </Link>
          </li>
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
