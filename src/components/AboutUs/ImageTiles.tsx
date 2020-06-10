import React, { useLayoutEffect, useState } from "react";
import { Container, Col, Row, Carousel, Image } from "react-bootstrap";
// import { useWindowSize } from "../../utils/components";
//images
// import YachtTable from "../../assets/images/boat-table.jpg";
import Yacht from "../../assets/images/miami-yacht.jpg";
// import BlackLambo from "../../assets/images/black_lambo.jpg";
import WhiteLambo from "../../assets/images/white_lambo.jpeg";
import Villa from "../../assets/images/villa2.jpg";

const ImageTiles: React.FC = () => (
  <Row className="text-center">
    <Col xs={12} className="p-md-5 p-3">
      <div className="w-100">
        <Image className="img-tile" src={Yacht} rounded fluid />
      </div>
      <div className="w-50 my-3 mx-auto border-top border-dark ">
        <h4>Yacht Rentals</h4>
      </div>
    </Col>
    <Col xs={12} className="p-md-5 p-3">
      <Image className="img-tile" src={WhiteLambo} rounded fluid />
      <div className="w-50 my-3 mx-auto border-top border-dark text-center">
        <h4>Exotic Cars</h4>
      </div>
    </Col>
    <Col xs={12} className="p-md-5 p-3">
      <Image className="img-tile" src={Villa} rounded fluid />
      <div className="w-50 my-3 mx-auto border-top border-dark text-center">
        <h4>Luxury Villas</h4>
      </div>
    </Col>
  </Row>
);

export default ImageTiles;
