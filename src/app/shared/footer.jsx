import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const Footer = ({ twitter, fb, ig, linkedin, classname }) => {
  return (
    <Container fluid className="footer-container">
      <footer>
        <div>
          <ul className={classname}>
            {linkedin ? (
              <li>
                <a rel="noopener noreferrer" target="_blank" href={linkedin}>
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
              </li>
            ) : (
              ""
            )}
            {twitter ? (
              <li>
                <a rel="noopener noreferrer" target="_blank" href={twitter}>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
            ) : (
              ""
            )}
            {fb ? (
              <li>
                <a rel="noopener noreferrer" target="_blank" href={fb}>
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </li>
            ) : (
              ""
            )}
            {ig ? (
              <li>
                <a rel="noopener noreferrer" target="_blank" href={ig}>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </footer>
      <div className="box-name">
        <p style={{ marginRight: "1em" }}>Daniel Gazcón</p>
        <span style={{ color: "#7f6cf7", fontSize: "1.em" }}>2021</span>
      </div>
    </Container>
  );
};

export default Footer;
