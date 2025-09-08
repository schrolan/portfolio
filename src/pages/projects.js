import Container from "../components/container";
import handmeabook from "../assets/handmeabook.png"
import mhw from "../assets/mhw.png"

const Projects = () => {
    return (
        <>
            <Container classname="projects-container">
                <h1 className="previous-work-title">Previous Projects</h1>
                <div className="previous-work-wrapper">
                    <div className="previous-work">
                        <h3 className="previous-work-text">
                        This is a Monster Hunter World companion site that allows users to look up different items found in the game and save them to a favorite list.
                        <a href="https://github.com/schrolan/react-mhw-companion" target="_blank"><h4>GitHub repository.</h4></a>
                        <a href="http://3.141.0.125:3000/" target="_blank"><h4>And here is the deployed    site. Deployed using AWS.</h4></a>
                        </h3>
                        <img src={mhw} alt="a screenshot of my proct react mhw companion." className="float-bottom-left"/>
                    </div>
                    <div className="previous-work-2">
                        <h3 className="previous-work-2-text">
                            This is a site for readers that allows a user to create a profile, look up books given a criteria, and save them to a read later list.
                            <a href="https://github.com/schrolan/react-hand-me-a-book" target="_blank"><h4>GitHub repository.</h4></a>
                            <a href="http://3.22.112.97/" target="_blank"><h4>Here is the deployed site. Once again deployed using AWS.</h4></a>
                        </h3>
                            <img src={handmeabook} alt="a screenshot of my project hand me a book." className="float-bottom-left"/>
                    </div>
                    <div className="previous-work-3">
                        <h2 className="previous-work-3-text"><a href="https://github.com/schrolan?tab=repositories" target="_blank">Here is my github repositories page.</a></h2>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Projects