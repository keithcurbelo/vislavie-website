import React from "react";
// import { Container, Col } from "react-bootstrap";
import PromoVideo from "./video";
import PromoImage from "./logo";
import { useWindowSize } from "../../utils/components";

const IntroPanel: React.FC = () => {
  const [width] = useWindowSize();

  if (width > 400) {
    return <PromoVideo />;
  } else {
    return <PromoImage />;
  }
};

export default IntroPanel;
