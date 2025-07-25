import github from "../assets/GithubIcon.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
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
