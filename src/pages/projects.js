import Container from "../components/container";
import handmeabook from "../assets/handmeabook.png"
import mhw from "../assets/mhw.png"

const Projects = () => {
    return (
        <>
            <Container classname="projects-container">
                <h1 className="about-me">Projects</h1>
                <div className="previous-work">
                    <h3>
                        This is my Monster Hunter World app that I made. It allows users to create a profile and save items from the game they search up to their profile.
                        <a href="https://github.com/schrolan/react-mhw-companion" target="_blank"><h4>This is the github page for it.</h4></a>
                        <a href="http://3.141.0.125:3000/" target="_blank"><h4>And here is the deployed site. Deployed using AWS.</h4></a>
                        <img src={mhw} alt="a screenshot of my proct react mhw companion." className="float-bottom-left"/>
                    </h3>
                </div>
                <div className="previous-work-2">
                    <h3>
                        This is my fullstack react app called Hand me a Book. It uses the open source library API and allows users to search for a book and save it to a profile they can create.
                        <a href="https://github.com/schrolan/react-hand-me-a-book" target="_blank"><h4>The github repository for this app can be found here.</h4></a>
                        <a href="http://3.22.112.97/" target="_blank"><h4>Here is the deployed site. Once again deployed using AWS.</h4></a>
                        <img src={handmeabook} alt="a screenshot of my project hand me a book." className="float-bottom-left"/>
                    </h3>
                </div>
                <div className="previous-work-3">
                    <h2><a href="https://github.com/schrolan?tab=repositories" target="_blank">Here is my github repositories page.</a></h2>
                </div>

            </Container>
        </>
    )
}

export default Projects