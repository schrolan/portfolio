import { useState } from "react";

const Header = ({ sliderRef }) => {
  const [menuActive, setMenuActive] = useState(false);

  const slideMap = {
    home: 0,
    projects: 1,
    certificate: 2,
    skills: 3,
    contact: 4
  };

  const handleClick = (key) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideMap[key]);
    }
    setMenuActive(false);
  };

  return (
    <header className="header">
      <h1 onClick={() => handleClick("home")} className="main-name">
        Lance<span className="seo" style={{ color: "gold" }}>Charles</span>Schroeder
      </h1>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul className={`mobile-menu ${menuActive ? "active" : ""}`}>
          <li><h2 onClick={() => handleClick("projects")}>Other Projects</h2></li>
          <li><h2 onClick={() => handleClick("certificate")}>Certificate</h2></li>
          <li><h2 onClick={() => handleClick("skills")}>Skills</h2></li>
          <li><h2 onClick={() => handleClick("contact")}>Contact Information</h2></li>
        </ul>

        {/* Desktop menu */}
        <ul className="desktop-menu">
          <li><h2 onClick={() => handleClick("projects")}>Other Projects</h2></li>
          <li><h2 onClick={() => handleClick("certificate")}>Certificate</h2></li>
          <li><h2 onClick={() => handleClick("skills")}>Skills</h2></li>
          <li><h2 onClick={() => handleClick("contact")}>Contact Information</h2></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;