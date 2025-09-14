import Container from "../components/container";
import handmeabook from "../assets/handmeabook.png";
import mhw from "../assets/mhw.png";

const Projects = () => {
  return (
    <Container classname="projects-container">
      <h1 className="previous-work-title">Previous Projects</h1>
      <div className="previous-work-wrapper">

        <div className="previous-work">
          <div className="slide-inner">
            <h5 className="previous-work-text">
              This is a Monster Hunter World companion site that allows users to look up different items found in the game and save them to a favorite list.
              <br />
              <a href="https://github.com/schrolan/react-mhw-companion" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <h5>GitHub repository where you can learn what technology was used to create the site.</h5>
              </a>
            </h5>
            <a href="http://18.222.21.105:3000/" target="_blank" rel="noreferrer">
              <img src={mhw} alt="screenshot of my project react mhw companion" className="float-bottom-left" />
            </a>
          </div>
        </div>

        <div className="previous-work-2">
          <div className="slide-inner">
            <h5 className="previous-work-2-text">
              This is a site for readers that allows a user to create a profile, look up books given a criteria, and save them to a read later list.
              <a href="https://github.com/schrolan/react-hand-me-a-book" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <h5>GitHub repository where you can learn what technology was used to create the site.</h5>
              </a>
            </h5>
            <a href="http://3.144.161.54:3001/" target="_blank" rel="noreferrer">
              <img src={handmeabook} alt="screenshot of my project hand me a book" className="float-bottom-left" />
            </a>
          </div>
        </div>

        <div className="previous-work-3">
          <div className="slide-inner">
            <h5 className="previous-work-3-text">
              <a href="https://github.com/schrolan?tab=repositories" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                GitHub repositories page.
              </a>
            </h5>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Projects;