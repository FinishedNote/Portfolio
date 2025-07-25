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
        <a href="https://github.com/FinishedNote">Github</a>
      </div>
    </header>
  );
};

export default Header;
