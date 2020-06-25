import React from "react";
import { Col, Row, Image } from "react-bootstrap";
// import { useWindowSize } from "../../utils/components";
import Images from "./images.json";

const ImageTiles: React.FC = () => (
  <Row className="text-center">
    {Images.list.map((el: any, i: number) => (
      <Col key={i} xs={12} className="p-md-5 p-3 text-white">
        <div className="w-100">
          <Image className="img-tile" src={el.src} alt={el.alt} rounded fluid />
        </div>
        <div className="w-50 my-3 mx-auto border-top border-dark ">
          <h4>{el.title}</h4>
        </div>
      </Col>
    ))}
  </Row>
);

export default ImageTiles;
