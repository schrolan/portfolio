const Header = ({ sliderRef }) => {
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
  };

  return (
    <header className="header">
  <h1 onClick={() => handleClick("home")} className="main-name">
    Lance<span className="seo" style={{ color: "gold" }}>Charles</span>Schroeder
  </h1>
  <nav>
    <ul>
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