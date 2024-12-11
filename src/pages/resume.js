import Container from "../components/container";
import resume from "../assets/resume.jpg"

const Resume = () => {
    return (
        <>
            <Container classname="resume-container">
                <img src={resume} alt="An image of my resume." />
            </Container>
        </>
    )
}

export default Resume