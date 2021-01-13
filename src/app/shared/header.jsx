import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../assets/styles/header.css";
import avatar from "../../assets/images/mf-avatar.svg";

const Header = () => {
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
        <Navbar.Brand href="#home">
          <img alt="jathorstudio" width="48px" height="auto" src={avatar} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/*<Nav.Link href="#home">Home</Nav.Link>
		      		<Nav.Link href="#link">Link</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
