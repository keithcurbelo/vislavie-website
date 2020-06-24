import React from "react";
import { Row } from "react-bootstrap";
// import { getCurrentYear } from "../../utils/appHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  // const [currentYear] = useState(getCurrentYear());
  return (
    <footer id="main-footer" className="footer text-center">
      <Row>
        <a
          href="https://instagram.com/vislaviemiami?igshid=11gfn4i03v8tj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="social-media-icon"
          />
        </a>
        <span style={{ margin: "auto" }}>Vis La Vie</span>
        {/* <a href="http://">
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            size="lg"
            className="social-media-icon"
          />
        </a> */}
      </Row>
      {/* <Row>{currentYear}</Row> */}
    </footer>
  );
};

export default Footer;
