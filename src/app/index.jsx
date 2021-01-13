import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "../context/AuthContext";
import Contact from "./components/Contact";
import Footer from "./shared/footer";
import About from "./components/About";

import Header from "./shared/header";
import Article from "./shared/article";
import Image from "./shared/images";
import { posts, projects, socialNetworks } from "../helpers/data";
import ModalComponent from "./shared/ModalComponent";
import CarouselComponent from "./shared/CarouselComponent";

import "../assets/styles/post.css";
import "../assets/styles/projects.css";

const columns = { lg: 6, md: 6, sm: 6 };

const App = () => {
  const [post, setPost] = useState();
  const [show, setShow] = useState(false);
  const [project, setProject] = useState({});
  const [animateStats, setAnimateStats] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProject({});
  };
  const handleShow = (i) => {
    setProject(projects[i]);
    setShow(true);
  };

  useEffect(() => {
    setPost(posts());
  }, []);

  useEffect(() => {
    let aboutMe = document.querySelector("#about-me");
    function throttleScroll(e) {
      if (isPartiallyVisible(aboutMe)) {
        aboutMe.classList.add("active");
        setAnimateStats(true);
      }
    }

    window.addEventListener("scroll", throttleScroll, false);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div id="about-me">
        <Col
          style={{ paddingTop: "1em" }}
          className="text-center"
          lg={12}
          md={12}
        >
          <h1 className="title-section">ABOUT ME</h1>
        </Col>
        <Container className="container-post">
          <Row>
            {post
              ? post.map((item, i) => {
                  let contentclass = (i + 1) % 2 === 0 ? "border-text" : "";
                  return (
                    <Col
                      md={4}
                      lg={4}
                      sm={6}
                      key={i}
                      className={`${contentclass} title-post center-text`}
                    >
                      <div className="icon">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <Article title={item.title} content={item.content} />
                    </Col>
                  );
                })
              : "Loading..."}
          </Row>
        </Container>
        <About animateStats={animateStats} />
      </div>
      <Container
        fluid
        className="container-project title-post container-division"
        id="projects"
      >
        <Row className="text-center">
          <Col lg={{ span: 4, offset: 4 }}>
            <h1 className="title-section">PROJECTS</h1>
          </Col>
        </Row>
        <Row className="text-center">
          {projects.map((project, i) => (
            <Col {...columns} key={i} className="project-box">
              <Image
                img={project.img}
                classname="project-img"
                alt={project.alt}
              />
              <div className="project-title">
                <p>{project.title}</p>
              </div>
              <div className="project-button">
                <Button variant="secondary" onClick={() => handleShow(i)}>
                  Learn More
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        <ModalComponent show={show} handleClose={handleClose} project={project}>
          <CarouselComponent images={project.images} />
        </ModalComponent>
      </Container>
      <AuthContext>
        <Contact />
      </AuthContext>
      <Footer {...socialNetworks} classname="footer-box" />
    </div>
  );
};

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom + 250;
}

export default App;
