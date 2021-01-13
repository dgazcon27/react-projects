import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

import "../../assets/styles/about.css";
import avatar from "../../assets/images/mf-avatar.svg";

const columns = {
  lg: 6,
  md: 6,
  sm: 12,
};
const About = ({ animateStats }) => {
  const [languages, setLanguage] = useState(initialState());
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
              <ProgressBar label={lang.name} variant="info" now={20} />
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

function initialState() {
  return [
    {
      name: "HTML",
      level: 70,
      label: 90,
      initial: 0,
    },
    {
      name: "CSS",
      level: 70,
      label: 90,
      initial: 0,
    },
    {
      name: "SASS",
      level: 55,
      label: 75,
      initial: 0,
    },
    {
      name: "JavaScript",
      level: 65,
      label: 85,
      initial: 0,
    },
    {
      name: "React",
      level: 55,
      label: 75,
      initial: 0,
    },
    {
      name: "React-Native",
      level: 40,
      label: 60,
      initial: 0,
    },
    {
      name: "VueJs",
      level: 50,
      label: 70,
      initial: 0,
    },
    {
      name: "Git",
      level: 70,
      label: 90,
      initial: 0,
    },
  ];
}

export default About;
