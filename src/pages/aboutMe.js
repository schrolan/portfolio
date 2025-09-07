import Container from "../components/container"

const About = () => {
    return (
        <>
            <Container classname="about-me-container">
                <div className="card-contaienr">
                    <h1 className="about-me">About Me: Lance C. Schroeder</h1>
                    <div className="about-me-1">
                        <h3 className="about-me-text">
                            I'm Lance Schroeder, a dedicated front-end web developer with a strong foundation in HTML, CSS, JavaScript, and modern web technologies like React and RESTful APIs. I completed the UW Extended Campus Full Stack Web Development Boot Camp, where I collaborated on dynamic, user-focused applications and have continued to build personal projects since. With over eight years of experience working in University Housing, I bring a unique blend of technical skill, attention to detail, and deep understanding of the student experience. I'm passionate about using web design to make education more accessible and impactful for all.
                        </h3>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About