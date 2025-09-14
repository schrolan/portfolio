import Container from "../components/container";
import certificate from "../assets/certificate.jpg";

const Certificate = () => {
  return (
    <Container classname="certificate-container">
      <div className="slide-inner certificate-wrapper">
        <img src={certificate} alt="An image of my certificate." className="certificate" />
      </div>
    </Container>
  );
};

export default Certificate;