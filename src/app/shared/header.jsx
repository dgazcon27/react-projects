import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../assets/styles/header.css";
import avatar from "../../assets/images/mf-avatar.svg";

const Header = ({ current }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [width, setWidth] = useState(0);
  const [heightScreen, setHeightScreen] = useState({ height: "300px" });

  useEffect(() => {
    if (width > 767) {
      window.onscroll = (e) => {
        if (window.pageYOffset > 400) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
    }
    const updateWidth = () => {
      const width = document.body.clientWidth;
      setWidth(width);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
  }, [width]);

  // Set height screen for banner section
  useEffect(() => {
    setHeightScreen({ height: window.innerHeight });
  }, []);

  // resize height screen
  useEffect(() => {
    const updateScreenHeight = () => {
      setHeightScreen({ height: window.innerHeight });
    };

    window.addEventListener("resize", updateScreenHeight);

    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="md"
        fixed="top"
        className={`navbar-items ${isScroll ? "navbartop" : ""}`}
      >
        <Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="#about-me"
                className={current === "about" ? "current" : ""}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={current === "projects" ? "current" : ""}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#contacts"
                className={current === "contacts" ? "current" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <div id="home"></div>
      <section id="banner-principal" style={heightScreen} className="banner">
        <div>
          <h1>Hi I'm Daniel Gazcón</h1>
          <h3>Junior Frontend Developer | JS</h3>
        </div>
      </section>
    </div>
  );
};

export default Header;
