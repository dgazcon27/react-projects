import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

import "../../assets/styles/about.css";
import avatar from "../../assets/images/mf-avatar.svg";

import { skills } from "../../helpers/data";

const columns = {
  lg: 6,
  md: 6,
  sm: 12,
};
const About = ({ animateStats }) => {
  const [languages, setLanguage] = useState(skills);
  useEffect(() => {
    setTimeout(() => {
      if (animateStats) {
        const item = languages.map((lang) => {
          return { ...lang, initial: lang.level };
        });
        setLanguage(item);
      }
    }, 1000);
  }, [languages, animateStats]);
  return (
    <Container className="container-us" fluid>
      <Row className="text-center">
        <Col {...columns} className="box-profile">
          <img src={avatar} alt="avatar" className="avatar" />
          <div>
            <p className="article-content">
              I'm a enthusiastic frontend developer from Venezuela.<br></br>I
              have passion for UX details, usability and creating<br></br>
              intuitive user interfaces.
            </p>
          </div>
        </Col>
        <Col {...columns}>
          {languages.map((lang, key) => (
            <ProgressBar className="statusBar" key={key}>
              <ProgressBar
                className="progress-title"
                label={lang.name}
                variant="info"
                now={20}
              />
              <ProgressBar
                label={`${lang.label}%`}
                variant="info"
                now={lang.initial}
              />
            </ProgressBar>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
