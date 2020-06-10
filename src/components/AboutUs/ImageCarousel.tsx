import React, { useLayoutEffect, useState } from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
// import { useWindowSize } from "../../utils/components";
//images
import Yacht from "../../assets/images/yatch.jpeg";
import BlackLambo from "../../assets/images/black_lambo.jpg";
import WhiteLambo from "../../assets/images/white_lambo.jpeg";

const ImageCarousel: React.FC = () => (
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
        <img className="d-block w-100" src={BlackLambo} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WhiteLambo} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Row>
);

export default ImageCarousel;
