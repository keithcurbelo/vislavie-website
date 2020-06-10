import React from "react";
// import { Container, Col } from "react-bootstrap";
import Video from "../../assets/videos/promo1.mp4";

const IntroPanel: React.FC = () => (
  <video
    id="background-video"
    className="min-height-50 w-100"
    loop
    autoPlay
    muted
  >
    <source src={Video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default IntroPanel;
