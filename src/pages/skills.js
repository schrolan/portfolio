import Container from "../components/container";

const Skills = () => {
  return (
    <Container classname="skills-container">
      <div className="slide-inner">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-wrapper">
          <div className="skills">
            <h5 className="skills-text">
              Frontend (Client-side)
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <br></br>
                <li>HTML - structure of web pages</li>
                <br></br>
                <li>CSS - styling and layout</li>
                <br></br>
                <li>JavaScript - interactivity and logic of the browser</li>
                <br></br>
                <li>React - frontend framework/library for building UI</li>
                <br></br>
                <li>SEO - frontend-focused practices for visibility and optimization</li>
              </ul>
            </h5>
          </div>
          <div className="skills-2">
            <h5 className="skills-2-text">
              Backend (Server-side)
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <br></br>
                <li>Node.js - runtime environment for server-side JavaScript</li>
                <br></br>
                <li>Express - Node.js web application framework</li>
                <br></br>
                <li>GraphQL - API query language, usually implemented server-side</li>
                <br></br>
                <li>RESTful API - architectural style for backend APIs</li>
                <br></br>
                <li>MySQL - relational database (SQL)</li>
                <br></br>
                <li>NoSQL - non-relational database (MongoDB)</li>
              </ul>
            </h5>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;