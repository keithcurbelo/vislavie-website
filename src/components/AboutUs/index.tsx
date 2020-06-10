import React, { useLayoutEffect, useState } from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { useWindowSize } from "../../utils/components";
import ImageTiles from "./ImageTiles";

const AboutUs = () => {
  // const [width, height] = useWindowSize();
  return (
    <Container fluid className="min-vh-100">
      {/* <Row className="w-100">
        <Col className="text-center text-uppercase">
          <h2> About Us</h2>
        </Col>
      </Row> */}
      <Row className="w-100">
        <Col className="text-center text-uppercase">
          <h4 className="font-weight-bold">
            Everything you need for the ultimate luxury experience
          </h4>
          <h6 className="font-weight-light">
            You deserve nothing other than best
          </h6>
        </Col>
      </Row>
      <ImageTiles />
    </Container>
  );
};

export default AboutUs;
