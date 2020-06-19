import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
// import Yacht from "../../assets/images/yatch.jpeg";
// import BlackLambo from "../../assets/images/black_lambo.jpg";
// import WhiteLambo from "../../assets/images/white_lambo.jpeg";

const CompanyDescription: React.FC = () => {
  return (
    <Row className="w-100">
      <Col className="text-center">
        <p>
          Discover the unparalleled experience that is Vis La Vie. With us, your
          dreams become a reality. Prepare yourself for an unforgettable
          adventure that eill be completely tailored to you. Experience white
          glove service paired with exceptional scenic water views. Explore
          secluded sandbars, 5 star restaurants, local marine life and so much
          more.
        </p>
        <p>Welcome to South Florida. The boating capital of the world.</p>
      </Col>
    </Row>
  );
};

export default CompanyDescription;
