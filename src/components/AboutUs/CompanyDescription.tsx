import React from "react";
import { Col, Row } from "react-bootstrap";

const CompanyDescription: React.FC = () => {
  return (
    <Row className="">
      <Col className="text-center">
        <p className="p-3 font-sm">
          Discover the unparalleled experience that is Vis La Vie. With us, your
          dreams become a reality. Prepare yourself for an unforgettable
          adventure that eill be completely tailored to you.
          {/* Experience white
          glove service paired with exceptional scenic water views. Explore
          secluded sandbars, 5 star restaurants, local marine life and so much
          more. */}
        </p>
        <p>
          Welcome to South Florida. <br />
          The boating capital of the world.
        </p>
      </Col>
      {/* <Row className="w-100">
        <Col className="text-center text-uppercase">
          <h4 className="font-weight-bold">
            Everything you need for the ultimate luxury experience
          </h4>
          <h6 className="font-weight-light">
            You deserve nothing other than best
          </h6>
        </Col>
      </Row> */}
    </Row>
  );
};

export default CompanyDescription;
