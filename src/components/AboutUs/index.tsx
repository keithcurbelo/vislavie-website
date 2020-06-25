import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useWindowSize } from "../../utils/components";
import ImageTiles from "./ImageTiles";
import ImageCarousel from "./ImageCarousel";
import CompanyDescription from "./CompanyDescription";

const AboutUs = () => {
  const [width] = useWindowSize();
  // console.log("width", width);
  if (width >= 768) {
    return <ImageCarousel />;
  } else {
    return (
      <Container fluid className="min-vh-100">
        <Row className="pt-4">
          <Col className="text-center text-gold text-uppercase">
            <h2> About Us</h2>
          </Col>
        </Row>
        <CompanyDescription />
        <ImageTiles />
      </Container>
    );
  }
};

export default AboutUs;
