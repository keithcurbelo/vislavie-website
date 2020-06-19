import React from "react";
import { Carousel } from "react-bootstrap";
import Images from "./images.json";
// import { useWindowSize } from "../../utils/components";

const ImageCarousel: React.FC = () => (
  // <Row className="vh-100">
  <Carousel interval={3000} className="w-100">
    {Images.list.map((el: any, i: number) => (
      <Carousel.Item key={i}>
        <img className="carousel-img" src={el.src} alt="First slide" />
        <Carousel.Caption>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  // </Row>
);

export default ImageCarousel;
