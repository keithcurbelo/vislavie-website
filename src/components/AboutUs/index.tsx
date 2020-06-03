import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import Yacht from "../../assets/images/yatch.jpeg";

const AboutUs = () => {
  return (
    <Container fluid className="min-vh-100">
      <Row className="w-100">
        <Col className="text-center">
          <h2> About Us</h2>
        </Col>
      </Row>
      <Row className="w-100">
        <Col className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Col>
      </Row>
      <Row>
        <Carousel className="w-100 py-3">
          <Carousel.Item>
            <img className="d-block w-100" src={Yacht} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Yacht} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Yacht} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default AboutUs;
