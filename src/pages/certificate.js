import Container from "../components/container";
import certificate from "../assets/certificate.jpg"

const Certificate = () => {
    return (
        <>
            <Container classname="certificate-container">
                <img src={certificate} alt="An image of my certificate." />
            </Container>
        </>
    )
}

export default Certificate