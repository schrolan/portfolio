import Container from "../components/container";

const Skills = () => {
    return (
        <>
            <Container classname="skills-container">
                <h1 className="skills-title">Skills</h1>
                <div className="skills-wrapper">
                    <div className="skills">
                        <h3 className="skills-text">
                        Frontend (Client-side)
                            <h4>
                                <ul style={{ listStyleType: 'none' }}>
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
                                    <br></br>
                                </ul>
                            </h4>
                        </h3>
                    </div>
                    <div className="skills-2">
                        <h3 className="skills-2-text">
                           Backend (Server-side)
                            <h4>
                                <ul style={{ listStyleType: 'none' }}>
                                    <br></br>
                                    <li>Node.js - runtime enviornment for server-side JavaScript</li>
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
                                    <br></br>
                                </ul>
                            </h4>
                        </h3>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Skills